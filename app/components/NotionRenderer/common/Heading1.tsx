import { Heading1BlockObjectResponse } from "@notionhq/client";
import { RichText } from "./RichText";

export function Heading1({ block }: { block: Heading1BlockObjectResponse }) {
  return (
    <h2
      id={block.heading_1.rich_text.map((p) => p.plain_text).join("")}
      className="font-bold text-2xl/relaxed sm:text-3xl/relaxed mt-5 sm:mt-6 mb-8 sm:mb-9"
    >
      <RichText items={block.heading_1.rich_text} />
    </h2>
  );
}
