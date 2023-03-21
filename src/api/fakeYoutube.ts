import axios, { AxiosInstance } from "axios";
import { Video, VideoWithKeyword } from "../interfaces/Video";
import { YoutubeClass } from "./youtube";

export default class FakeYoutube implements YoutubeClass {
  httpClient: AxiosInstance;
  constructor() {
    this.httpClient = axios.create({
      baseURL: "/videos/",
    });
  }

  async search(keyword: string | undefined) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword: string): Promise<Video[]> {
    return this.httpClient
      .get(`/search.json`)
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item: VideoWithKeyword) => ({
          ...item,
          id: item.id.videoId,
        }))
      );
  }

  async #mostPopular(): Promise<Video[]> {
    return this.httpClient.get(`/popular.json`).then((res) => res.data.items);
  }
}
