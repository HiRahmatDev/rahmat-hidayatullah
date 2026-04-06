import { isFullPage } from "@notionhq/client";
import { notion } from ".";

interface PageProperty {
  blockId: string;
  name: string;
  excerpt: string;
  publishedTime: string;
}

export async function fetchPagePropertyBySlug(
  slug: string,
): Promise<PageProperty | null> {
  const response = await notion.dataSources.query({
    data_source_id: process.env.DATA_SOURCE_JOURNAL_ID!,
    filter_properties: ["Nama", "Kutipan", "Published time"],
    filter: {
      and: [
        { property: "Tag", multi_select: { contains: "Harian" } },
        { property: "Published time", date: { is_not_empty: true } },
        { property: "Slug", url: { equals: slug } },
      ],
    },
    sorts: [{ property: "Published time", direction: "descending" }],
  });

  const result = response.results?.[0];

  if (!result || !isFullPage(result)) {
    return null;
  }

  const name =
    result.properties.Nama.type === "title"
      ? result.properties.Nama.title.map((t) => t.plain_text).join("")
      : "";

  const excerpt =
    result.properties.Kutipan.type === "rich_text"
      ? result.properties.Kutipan.rich_text.map((t) => t.plain_text).join("")
      : "";

  const publishedTime =
    result.properties["Published time"].type === "date"
      ? result.properties["Published time"].date?.start || ""
      : "";

  return { blockId: result.id, name, excerpt, publishedTime };
}
