import { isFullBlock } from "@notionhq/client";
import { NextRequest, NextResponse } from "next/server";

import { notion } from "@/services/notion";

export async function GET(
  _: NextRequest,
  ctx: RouteContext<"/api/proxy-image/[blockId]">,
) {
  const { blockId } = await ctx.params;

  if (!blockId) {
    return new NextResponse("Not found", { status: 404 });
  }

  const response = await notion.blocks.retrieve({
    block_id: blockId,
  });

  if (isFullBlock(response)) {
    const imageUrl =
      response.type === "image" && response.image.type === "file"
        ? response.image.file.url
        : null;

    if (imageUrl) {
      const res = await fetch(imageUrl);
      const buffer = await res.arrayBuffer();

      return new NextResponse(buffer, {
        headers: {
          "Content-Type": res.headers.get("Content-Type") ?? "image/jpeg",
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    }
  }

  return new NextResponse("Not found", { status: 404 });
}
