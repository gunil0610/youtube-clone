import { create } from "zustand";
import Youtube, { YoutubeClass } from "../api/youtube";
import YoutubeClient from "../api/youtubeClient";

interface YoutubeContext {
  youtube: YoutubeClass;
}

const client = new YoutubeClient();
const youtube = new Youtube(client);

export const useYoutubeApi = create<YoutubeContext>(() => ({
  youtube,
}));
