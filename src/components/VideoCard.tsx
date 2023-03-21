import React from "react";
import { Video } from "../interfaces/Video";

interface Props {
  video: Video;
}

const VideoCard: React.FC<Props> = ({ video }) => (
  <li>{video.snippet.title}</li>
);

export default VideoCard;
