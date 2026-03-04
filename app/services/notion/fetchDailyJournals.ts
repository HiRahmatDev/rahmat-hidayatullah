import { isFullPage } from "@notionhq/client";
import { notion } from ".";

interface DailyJournal {
  pageId: string;
  name: string;
  excerpt: string;
  createdTime: string;
  slug: string;
}

export async function fetchDailyJournals(): Promise<DailyJournal[]> {
  const response = await notion.dataSources.query({
    data_source_id: process.env.DATA_SOURCE_JOURNAL_ID!,
    filter_properties: ["Nama", "Kutipan", "Dibuat", "Slug"],
    filter: { property: "Tag", multi_select: { contains: "Harian" } },
    sorts: [{ property: "Dibuat", direction: "descending" }],
  });

  const results: DailyJournal[] = [];

  for (const page of response.results) {
    if (!isFullPage(page)) {
      continue;
    }

    const name =
      page.properties.Nama.type === "title"
        ? page.properties.Nama.title.map((t) => t.plain_text).join("")
        : "";

    const excerpt =
      page.properties.Kutipan.type === "rich_text"
        ? page.properties.Kutipan.rich_text.map((t) => t.plain_text).join("")
        : "";

    console.log("Dibuat", page.properties.Dibuat);

    const createdTime =
      page.properties.Dibuat.type === "date"
        ? page.properties.Dibuat.date?.start
        : "";

    const slug =
      page.properties.Slug.type === "url" ? page.properties.Slug.url || "" : "";

    results.push({
      pageId: page.id,
      name,
      excerpt,
      createdTime: createdTime!,
      slug,
    });
  }

  return results;
}
