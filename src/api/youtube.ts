import axios, { AxiosInstance } from "axios";
import { Video, VideoWithKeyword } from "../interfaces/Video";
import { YoutubeClientClass } from "./youtubeClient";

export interface YoutubeClass {
  apiClient: YoutubeClientClass;
  search(keyword: string | undefined): Promise<Video[]>;
}

export default class Youtube implements YoutubeClass {
  apiClient: YoutubeClientClass;

  constructor(apiClient: YoutubeClientClass) {
    this.apiClient = apiClient;
  }

  async search(keyword: string | undefined) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword: string): Promise<Video[]> {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item: VideoWithKeyword) => ({
          ...item,
          id: item.id.videoId,
        }))
      );
  }

  async #mostPopular(): Promise<Video[]> {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }
}
