import { CodeBlockObjectResponse } from "@notionhq/client";

export function CodeBlock({ block }: { block: CodeBlockObjectResponse }) {
  const codeBlock =
    block.code.rich_text.map((rt) => rt.plain_text).join("") || "";

  return (
    <pre className={`language-${block.code.language}`}>
      <code>{codeBlock}</code>
    </pre>
  );
}
