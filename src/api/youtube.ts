import axios, { AxiosInstance } from "axios";
import { Video, VideoWithKeyword } from "../interfaces/Video";

export interface YoutubeClass {
  httpClient: AxiosInstance;
  search(keyword: string | undefined): Promise<Video[]>;
}

export default class Youtube implements YoutubeClass {
  httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3/",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(keyword: string | undefined) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword: string): Promise<Video[]> {
    return this.httpClient
      .get("search", {
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
    return this.httpClient
      .get("videos", {
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }
}
