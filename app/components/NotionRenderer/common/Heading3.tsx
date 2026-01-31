import { Heading3BlockObjectResponse } from "@notionhq/client";
import { RichText } from "./RichText";

export function Heading3({ block }: { block: Heading3BlockObjectResponse }) {
  return (
    <h3
      id={block.heading_3.rich_text.map((p) => p.plain_text).join("")}
      className="font-bold text-lg/relaxed sm:text-xl/relaxed mt-11 sm:mt-12 mb-5 sm:mb-6"
    >
      <RichText items={block.heading_3.rich_text} />
    </h3>
  );
}
