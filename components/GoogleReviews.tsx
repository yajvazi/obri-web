"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Review = {
  author: string;
  rating: number;
  text: string;
  date: string;
  photo?: string;
  source: "google" | "obri";
};

type ReviewsResponse = {
  configured: boolean;
  source: "google" | "obri";
  message?: string;
  placeName?: string;
  rating?: number | null;
  total?: number | null;
  googleUrl?: string;
  reviews: Review[];
};

function Stars({ rating }: { rating: number }) {
  return <span className="text-obri-emergency" aria-label={`${rating} star review`}>{"★★★★★".slice(0, Math.round(rating))}</span>;
}

export function GoogleReviews() {
  const [data, setData] = useState<ReviewsResponse | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    fetch("/api/google-reviews", { cache: "no-store" })
      .then((response) => response.json())
      .then((payload) => {
        if (active) setData(payload);
      })
      .catch(() => {
        if (active) setError(true);
      });

    return () => {
      active = false;
    };
  }, []);

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-5 text-red-900">
        Google reviews could not be loaded right now.
      </div>
    );
  }

  if (!data) {
    return (
      <div className="grid gap-5 md:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className="h-56 animate-pulse rounded-lg bg-slate-100" />
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8 flex flex-col justify-between gap-4 rounded-lg bg-obri-mist p-6 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-obri-blue">
            {data.source === "google" ? "Live Google reviews" : "Obri website reviews"}
          </p>
          <h2 className="mt-2 text-2xl font-black text-obri-ink">{data.placeName || "OBRI Electrical Services"}</h2>
          {data.rating ? (
            <p className="mt-2 font-bold text-slate-700">
              <Stars rating={data.rating} /> {data.rating} from {data.total} Google reviews
            </p>
          ) : null}
          {data.message ? <p className="mt-2 text-sm text-slate-600">{data.message}</p> : null}
        </div>
        {data.googleUrl ? (
          <a className="rounded bg-obri-blue px-5 py-3 text-center font-bold text-white" href={data.googleUrl} target="_blank" rel="noreferrer">
            View on Google
          </a>
        ) : null}
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {data.reviews.map((review, index) => (
          <article key={`${review.author}-${index}`} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              {review.photo ? (
                <Image src={review.photo} alt="" width={44} height={44} className="h-11 w-11 rounded-full" />
              ) : (
                <span className="grid h-11 w-11 place-items-center rounded-full bg-obri-blue font-black text-white">
                  {review.author.charAt(0)}
                </span>
              )}
              <div>
                <p className="font-black text-obri-ink">{review.author}</p>
                <p className="text-xs text-slate-500">{review.date}</p>
              </div>
            </div>
            <p className="mt-4"><Stars rating={review.rating} /></p>
            <p className="mt-4 leading-7 text-slate-700">{review.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
