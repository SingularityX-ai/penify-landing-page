import LiteYouTubeEmbed, { imgResolution } from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

interface YoutubeEmbedType {
  videoId: string;
  title: string;
  poster: imgResolution;
}

export function YoutubeEmbed({ videoId, title, poster }: YoutubeEmbedType) {
  return (
    <LiteYouTubeEmbed
      id={videoId}
      title={title}
      poster={poster}
      cookie={true}
      webp
    />
  );
}
