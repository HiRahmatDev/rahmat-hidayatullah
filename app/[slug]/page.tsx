import { notFound } from "next/navigation";

import { fetchBlockIdBySlug } from "@/services/notion/fetchBlockIdBySlug";
import { notion } from "@/services/notion";
import { NotionRenderer } from "@/components/NotionRenderer";
import { Footer } from "@/components/Footer";

interface DetailPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export default async function DetailPage({ params }: DetailPageProps) {
  const { slug } = await params;
  const blockId = await fetchBlockIdBySlug(slug);

  if (!blockId) {
    notFound();
  }

  const listBlockChildren = await notion.blocks.children.list({
    block_id: blockId,
  });

  return (
    <main>
      <section></section>
      <article>
        <div className="max-w-204 mx-auto px-4 sm:px-12 pt-6 sm:pt-10 pb-12 sm:pb-20">
          <NotionRenderer listBlockChildren={listBlockChildren} />
        </div>
      </article>
      <Footer inReadingMode />
    </main>
  );
}
