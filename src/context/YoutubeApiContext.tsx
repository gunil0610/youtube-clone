import { create } from "zustand";
import FakeYoutubeClient from "../api/fakeYoutubeClient";
import Youtube, { YoutubeClass } from "../api/youtube";
import YoutubeClient from "../api/youtubeClient";

interface YoutubeContext {
  youtube: YoutubeClass;
}

const client = new FakeYoutubeClient();
const youtube = new Youtube(client);

export const useYoutubeApi = create<YoutubeContext>(() => ({
  youtube,
}));
