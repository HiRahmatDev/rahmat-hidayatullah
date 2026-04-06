import { isFullPage } from "@notionhq/client";
import { notion } from ".";

interface DailyJournal {
  pageId: string;
  name: string;
  excerpt: string;
  publishedTime: string;
  slug: string;
}

export async function fetchDailyJournals(): Promise<DailyJournal[]> {
  const response = await notion.dataSources.query({
    data_source_id: process.env.DATA_SOURCE_JOURNAL_ID!,
    filter_properties: ["Nama", "Kutipan", "Slug", "Published time"],
    filter: {
      and: [
        { property: "Tag", multi_select: { contains: "Harian" } },
        { property: "Published time", date: { is_not_empty: true } },
        { property: "Slug", url: { is_not_empty: true } },
      ],
    },
    sorts: [{ property: "Published time", direction: "descending" }],
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

    const publishedTime =
      page.properties["Published time"].type === "date"
        ? page.properties["Published time"].date?.start || ""
        : "";

    const slug =
      page.properties.Slug.type === "url" ? page.properties.Slug.url || "" : "";

    results.push({
      pageId: page.id,
      name,
      excerpt,
      publishedTime,
      slug,
    });
  }

  return results;
}
