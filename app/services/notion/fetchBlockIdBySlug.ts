import { isFullPage } from "@notionhq/client";
import { notion } from ".";

export async function fetchBlockIdBySlug(slug: string): Promise<string | null> {
  const response = await notion.dataSources.query({
    data_source_id: process.env.DATA_SOURCE_JOURNAL_ID!,
    filter_properties: ["Slug"],
    filter: { property: "Slug", url: { equals: slug } },
    sorts: [{ property: "Dibuat", direction: "descending" }],
  });

  const result = response.results?.[0];

  if (!result || !isFullPage(result)) {
    return null;
  }

  return result.id;
}
