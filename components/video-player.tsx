"use client";

import dynamic from "next/dynamic";

type VideoPlayerProps = {
  url: string;
};

const Player = dynamic(() => import("react-player"), {
  ssr: false,
});

export function VideoPlayer({ url }: VideoPlayerProps) {
  return (
    <Player url={url} width="100%" height="100%" controls />
  );
}
