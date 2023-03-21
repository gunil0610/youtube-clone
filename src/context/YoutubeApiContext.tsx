import { create } from "zustand";
import FakeYoutube from "../api/fakeYoutube";
import Youtube, { YoutubeClass } from "../api/youtube";

interface YoutubeContext {
  youtube: YoutubeClass;
}

export const useYoutubeApi = create<YoutubeContext>(() => ({
  youtube: new FakeYoutube(),
}));
