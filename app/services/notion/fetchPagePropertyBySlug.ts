import { isFullPage } from "@notionhq/client";
import { notion } from ".";

interface PageProperty {
  blockId: string;
  name: string;
  excerpt: string;
  createdTime: string;
}

export async function fetchPagePropertyBySlug(
  slug: string,
): Promise<PageProperty | null> {
  const response = await notion.dataSources.query({
    data_source_id: process.env.DATA_SOURCE_JOURNAL_ID!,
    filter_properties: ["Nama", "Kutipan", "Dibuat"],
    filter: {
      and: [
        { property: "Tag", multi_select: { contains: "Harian" } },
        { property: "Slug", url: { equals: slug } },
      ],
    },
    sorts: [{ property: "Dibuat", direction: "descending" }],
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

  const createdTime =
    result.properties.Dibuat.type === "created_time"
      ? result.properties.Dibuat.created_time
      : "";

  return { blockId: result.id, name, excerpt, createdTime };
}
