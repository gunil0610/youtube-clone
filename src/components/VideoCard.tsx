import React from "react";
import { useNavigate } from "react-router-dom";

import { Video } from "../interfaces/Video";
import { formatAgo } from "../util/date";

interface Props {
  video: Video;
  isList?: boolean;
}
const VideoCard: React.FC<Props> = ({ video, isList = false }) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };
  return (
    <li
      onClick={handleClick}
      className={`cursor-pointer ${isList ? "flex gap-1 m-2" : ""}`}
    >
      <img
        className={`${isList ? "w-60 mr-2" : "w-full"}`}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt, "ko")}</p>
      </div>
    </li>
  );
};

export default VideoCard;
