import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import FakeYoutube from "../api/fakeYoutube";
import Youtube from "../api/youtube";
import VideoCard from "../components/VideoCard";

export default function Videos() {
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => {
    const youtube = new FakeYoutube();
    return youtube.search(keyword);
  });

  return (
    <>
      <h1>Videos {keyword ? `🔍${keyword}` : "🔥"}</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {videos && (
        <ul>
          {videos.map((video: any) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
