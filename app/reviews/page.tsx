import type { Metadata } from "next";
import { GoogleReviews } from "@/components/GoogleReviews";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Customer testimonials and reviews for OBRI Electrical Services in London."
};

export default function ReviewsPage() {
  return (
    <main>
      <Section title="Reviews & Testimonials" intro="At OBRI, our reputation is built on the trust and satisfaction of our clients. Customers praise reliable service, clear communication, quality workmanship and rapid response times.">
        <GoogleReviews />
        <div className="mt-10 rounded-lg bg-obri-mist p-6">
          <p className="text-lg font-bold text-obri-ink">The greatest measure of our success is the confidence our clients place in us and the recommendations they make to friends, family, and businesses.</p>
          <p className="mt-3 text-slate-700">Your satisfaction is our strongest endorsement. Follow us on 5 Star Reviews on Google.</p>
        </div>
      </Section>
    </main>
  );
}
