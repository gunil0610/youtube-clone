import { CommonVideo, Video } from "../interfaces/Video";
import { YoutubeClientClass } from "./youtubeClient";

export interface YoutubeClass {
  apiClient: YoutubeClientClass;
  search(keyword: string | undefined): Promise<CommonVideo[]>;
  channelImageURL(id: string): Promise<string>;
  relatedVideos(id: string): Promise<CommonVideo[]>;
}

export default class Youtube implements YoutubeClass {
  apiClient: YoutubeClientClass;

  constructor(apiClient: YoutubeClientClass) {
    this.apiClient = apiClient;
  }

  async search(keyword: string | undefined) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async channelImageURL(id: string) {
    return this.apiClient
      .channels({ params: { part: "snippet", id } })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }
  async relatedVideos(id: string) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          relatedToVideoId: id,
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({
          ...item,
          id: item.id.videoId,
        }))
      );
  }

  async #searchByKeyword(keyword: string): Promise<CommonVideo[]> {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({
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
