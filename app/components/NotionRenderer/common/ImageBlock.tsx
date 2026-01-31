import { ImageBlockObjectResponse } from "@notionhq/client";
import Image from "next/image";

export function ImageBlock({ block }: { block: ImageBlockObjectResponse }) {
  const src = block.image.type === "file" ? block.image.file.url : null;
  const caption = block.image.caption.map((text) => text.plain_text).join("");

  if (!src) {
    return null;
  }

  return (
    <figure className="mb-8 sm:mb-9 w-fit">
      <Image
        src={src}
        width={720}
        height={720}
        alt={caption || ""}
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
