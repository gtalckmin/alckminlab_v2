import { fetchVideos } from "@/lib/sanity";
import { Video } from "@/lib/types";
import dynamic from "next/dynamic";

const Player = dynamic(() => import("react-player"), { ssr: false });

const fallbackVideos: Video[] = [
  {
    _id: "fallback-video",
    title: "Keynote placeholder",
    slug: "keynote-placeholder",
    description: "A recent talk on current research.",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "keynote",
  },
];

async function loadVideos(): Promise<Video[]> {
  const hasSanity = Boolean(process.env.SANITY_PROJECT_ID);
  if (!hasSanity) return fallbackVideos;

  const videos = await fetchVideos();
  return videos?.length ? videos : fallbackVideos;
}

export default async function VideosPage() {
  const videos = await loadVideos();

  return (
    <main className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-base-800/60">Videos</p>
        <h1 className="font-heading text-3xl">Talks and demos</h1>
      </header>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <article key={video._id} className="space-y-3 rounded-2xl bg-white p-4 shadow-soft">
            <div className="aspect-video overflow-hidden rounded-xl bg-base-100">
              <Player url={video.url} width="100%" height="100%" controls />
            </div>
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.2em] text-base-800/60">{video.category}</p>
              <h2 className="font-heading text-lg leading-snug">{video.title}</h2>
              <p className="text-sm text-base-800/70">{video.description}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
