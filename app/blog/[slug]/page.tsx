import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { advicePosts } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return advicePosts.map(([slug]) => ({ slug }));
}

function getPost(slug: string) {
  return advicePosts.find(([postSlug]) => postSlug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post[1], description: post[2] };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const [, title, excerpt] = post;
  return (
    <main>
      <Section title={title} intro={excerpt}>
        <div className="max-w-3xl space-y-6 text-lg leading-8 text-slate-700">
          <p>Electrical problems should be approached carefully. If there is burning smell, visible damage, repeated tripping or loss of power, isolate the affected circuit where it is safe and call a qualified electrician.</p>
          <p>OBRI Electrical Services can inspect, test and explain the safest repair or upgrade route for residential, commercial and industrial properties across London.</p>
          <p>For urgent support, use the call or WhatsApp buttons and provide your postcode, access details and a short description of the issue.</p>
        </div>
      </Section>
    </main>
  );
}
