import { ImageBlockObjectResponse } from "@notionhq/client";
import Image from "next/image";

export function ImageBlock({ block }: { block: ImageBlockObjectResponse }) {
  const caption = block.image.caption.map((text) => text.plain_text).join("");
  const src = `/api/proxy-image/${block.id}`;

  if (!block.id) {
    return null;
  }

  return (
    <figure className="mb-8 sm:mb-9 w-fit">
      <Image
        src={src}
        alt={caption || ""}
        priority
        width={720}
        height={480}
        sizes="(max-width: 768px) 100vw, 800px"
        className="rounded-xl sm:rounded-2xl"
      />
      {caption && (
        <figcaption className="mt-4 text-xs text-center text-primary-black/65 font-medium">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
