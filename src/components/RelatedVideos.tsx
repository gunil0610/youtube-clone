import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import VideoCard from "./VideoCard";

interface RelatedVideosProps {
  id: string;
}

const VideoLoading = () => (
  <div className="w-40 h-40 bg-zinc-600">Skeleton</div>
);

const RelatedVideos: React.FC<RelatedVideosProps> = ({ id }) => {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["relatedVideos", id], () => youtube.relatedVideos(id), {
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {videos && (
        <ul>
          {videos.map((video: any) => (
            <VideoCard key={video.id} video={video} isList />
          ))}
        </ul>
      )}
      {videos?.map((video) => (
        <div>{video.snippet.title}</div>
      ))}
    </>
  );
};

export default RelatedVideos;
