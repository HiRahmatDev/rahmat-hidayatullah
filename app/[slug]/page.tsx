import { notFound } from "next/navigation";
import Link from "next/link";

import { ArrowLeft } from "@/components/icons";
import { fetchPagePropertyBySlug } from "@/services/notion/fetchPagePropertyBySlug";
import { Footer } from "@/components/Footer";
import { notion } from "@/services/notion";
import { NotionRenderer } from "@/components/NotionRenderer";
import { VisualAccent } from "@/components/VisualAccent";

interface DetailPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export default async function DetailPage({ params }: DetailPageProps) {
  const { slug } = await params;
  const property = await fetchPagePropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const listBlockChildren = await notion.blocks.children.list({
    block_id: property.blockId,
  });

  return (
    <main>
      <section className="bg-light-green">
        <div className="max-w-204 mx-auto px-7 sm:px-12 pt-8 pb-6 sm:py-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1 mb-8 text-sm/[24px] sm:text-base/[24px] font-bold text-primary-green-lighter hover:text-primary-green hover:[&>svg]:-translate-x-0.5 active:[&>svg]:translate-x-0"
          >
            <ArrowLeft className="size-4.5 sm:size-5 stroke-[2.5] transition-transform duration-400 ease-(--ease-lazy)" />
            Kembali
          </Link>
          <VisualAccent />
          <h1 className="mt-3 mb-2 text-3xl sm:text-4xl font-bold tracking-tight">
            {property.name}
          </h1>
          <p className="text-[16.5px] sm:text-lg text-primary-black/65">
            {property.excerpt}
          </p>
          <div className="mt-4">
            <p className="text-sm font-semibold text-primary-black/40">
              {formatDate(property.createdTime)}
            </p>
          </div>
        </div>
      </section>
      <article>
        <div className="max-w-204 mx-auto px-7 sm:px-12 pt-6 sm:pt-10 pb-12 sm:pb-20">
          <NotionRenderer listBlockChildren={listBlockChildren} />
        </div>
      </article>
      <Footer inReadingMode />
    </main>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return date.toLocaleDateString("id", options);
}
