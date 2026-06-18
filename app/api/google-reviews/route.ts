import { NextResponse } from "next/server";
import { company, reviews } from "@/lib/data";

type GoogleReview = {
  author_name?: string;
  profile_photo_url?: string;
  rating?: number;
  relative_time_description?: string;
  text?: string;
  time?: number;
};

type Review = {
  author: string;
  rating: number;
  text: string;
  date: string;
  photo?: string;
  source: "google" | "obri";
};

const fallbackReviews: Review[] = reviews.map((review) => ({
  author: review.name,
  rating: review.rating,
  text: review.text,
  date: "From Obri website",
  source: "obri"
}));

async function findPlaceId(apiKey: string) {
  const query = encodeURIComponent(`${company.tradingName} ${company.phone} ${company.address}`);
  const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${query}&inputtype=textquery&fields=place_id,name,formatted_address&key=${apiKey}`;
  const response = await fetch(url, { next: { revalidate: 60 * 60 * 12 } });
  if (!response.ok) return null;
  const data = await response.json();
  return data?.candidates?.[0]?.place_id ?? null;
}

async function fetchGoogleReviews(apiKey: string, placeId: string) {
  const fields = "name,rating,user_ratings_total,url,reviews";
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&reviews_sort=newest&key=${apiKey}`;
  const response = await fetch(url, { next: { revalidate: 60 * 60 * 6 } });
  if (!response.ok) {
    throw new Error(`Google Places responded with ${response.status}`);
  }

  const data = await response.json();
  if (data.status && data.status !== "OK") {
    throw new Error(data.error_message || `Google Places status: ${data.status}`);
  }

  const result = data.result ?? {};
  const googleReviews: Review[] = (result.reviews ?? []).map((review: GoogleReview) => ({
    author: review.author_name || "Google reviewer",
    rating: review.rating || 5,
    text: review.text || "",
    date: review.relative_time_description || (review.time ? new Date(review.time * 1000).toLocaleDateString("en-GB") : "Google review"),
    photo: review.profile_photo_url,
    source: "google" as const
  })).filter((review: Review) => review.text);

  return {
    configured: true,
    source: "google",
    placeName: result.name ?? company.tradingName,
    rating: result.rating ?? null,
    total: result.user_ratings_total ?? null,
    googleUrl: result.url ?? `https://www.google.com/search?q=${encodeURIComponent(`${company.tradingName} reviews`)}`,
    reviews: googleReviews.length ? googleReviews : fallbackReviews
  };
}

export async function GET() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return NextResponse.json({
      configured: false,
      source: "obri",
      message: "Add GOOGLE_MAPS_API_KEY and optionally GOOGLE_PLACE_ID to load live Google reviews.",
      googleUrl: `https://www.google.com/search?q=${encodeURIComponent(`${company.tradingName} reviews`)}`,
      reviews: fallbackReviews
    });
  }

  try {
    const placeId = process.env.GOOGLE_PLACE_ID || await findPlaceId(apiKey);
    if (!placeId) {
      throw new Error("No matching Google Place ID found for OBRI.");
    }
    return NextResponse.json(await fetchGoogleReviews(apiKey, placeId));
  } catch (error) {
    return NextResponse.json({
      configured: true,
      source: "obri",
      message: error instanceof Error ? error.message : "Could not load Google reviews.",
      googleUrl: `https://www.google.com/search?q=${encodeURIComponent(`${company.tradingName} reviews`)}`,
      reviews: fallbackReviews
    }, { status: 200 });
  }
}
