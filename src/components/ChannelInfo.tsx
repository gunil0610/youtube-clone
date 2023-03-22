import { useQuery } from "@tanstack/react-query";
import React, { Suspense } from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";

interface ChannelInfoProps {
  id: string;
  name: string;
}

const ChannelLoading: React.FC<{ name?: string }> = ({ name = "Y" }) => (
  <div className="w-40 h-40 bg-zinc-600">{name[0]}</div>
);

const ChannelInfo: React.FC<ChannelInfoProps> = ({ id, name }) => {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery(
    ["channel", id],
    () => youtube.channelImageURL(id),
    { suspense: true }
  );

  return (
    <div className="flex my-4 mb-8 items-center gap-2">
      {/* <Suspense
        fallback={<div className="w-40 h-40 bg-zinc-600">{name[0]}</div>}
      > */}
      <img className="w-10 h-10 rounded-full" src={url} alt={name} />
      {/* </Suspense> */}
      <p className="text-lg font-medium">{name}</p>
    </div>
  );
};

export default ChannelInfo;
