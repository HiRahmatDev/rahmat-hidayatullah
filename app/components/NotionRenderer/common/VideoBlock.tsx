import { VideoBlockObjectResponse } from "@notionhq/client";

export function VideoBlock({ block }: { block: VideoBlockObjectResponse }) {
  if (block.video.type !== "external") {
    return null;
  }

  const { videoId, start } = extractYouTubeMetadata(block.video.external.url);

  if (!videoId) {
    return null;
  }

  return (
    <div className="relative w-[calc(100%+56px)] pb-[calc(56.25%+31px)] sm:w-full sm:pb-[56.25%] mb-8 rounded-none sm:rounded-2xl overflow-hidden -mx-7 sm:mx-0">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?start=${start}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </div>
  );
}

function extractYouTubeMetadata(url: string): {
  videoId: string | null;
  start: number;
} {
  // Extract video ID from YouTube URL
  const youtubeRegex =
    /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=)?([a-zA-Z0-9_-]{11})/;
  const match = url.match(youtubeRegex);
  const videoId = match ? match[5] : null;

  // Extract start time from URL parameters (e.g., ?t=30 or &t=30)
  const urlParams = new URLSearchParams(url.split("?")[1]);
  const startParam = urlParams.get("t") || urlParams.get("start") || "0";
  const start = parseInt(startParam, 10) || 0;

  return { videoId, start };
}
