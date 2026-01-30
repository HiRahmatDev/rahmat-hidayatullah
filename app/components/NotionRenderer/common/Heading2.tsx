import { Heading2BlockObjectResponse } from "@notionhq/client";
import { RichText } from "./RichText";

export function Heading2({ block }: { block: Heading2BlockObjectResponse }) {
  return (
    <h3
      id={block.heading_2.rich_text.map((p) => p.plain_text).join("")}
      className="font-bold text-xl/relaxed sm:text-2xl/relaxed mt-5 sm:mt-6 mb-3 sm:mb-4"
    >
      <RichText items={block.heading_2.rich_text} />
    </h3>
  );
}
