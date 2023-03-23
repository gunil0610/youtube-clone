import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import VideoCard from "./VideoCard";

interface RelatedVideosProps {
  id: string;
}

const RelatedVideos: React.FC<RelatedVideosProps> = ({ id }) => {
  const { youtube } = useYoutubeApi();
  const { data: videos } = useQuery(
    ["relatedVideos", id],
    () => youtube.relatedVideos(id),
    {
      staleTime: 1000 * 60 * 5,
      suspense: true,
    }
  );

  return (
    <ul>
      {videos?.map((video: any) => (
        <VideoCard key={video.id} video={video} isList />
      ))}
    </ul>
  );
};

export default RelatedVideos;
