import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";

interface ChannelInfoProps {
  id: string;
  name: string;
}

const ChannelInfo: React.FC<ChannelInfoProps> = ({ id, name }) => {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(
    ["channel", id],
    () => youtube.channelImageURL(id),
    { suspense: true, staleTime: 1000 * 60 * 5 }
  );

  return (
    <div className="flex my-4 mb-8 items-center gap-2">
      <img className="w-10 h-10 rounded-full" src={url} alt={name} />
      <p className="text-lg font-medium">{name}</p>
    </div>
  );
};

export default ChannelInfo;
