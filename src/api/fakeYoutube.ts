import axios from "axios";
import { Video, VideoWithKeyword } from "../interfaces/Video";

export default class FakeYoutube {
  constructor() {}

  async search(keyword: string | undefined) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword: string): Promise<Video[]> {
    return axios
      .get(`/videos/search.json`)
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item: VideoWithKeyword) => ({
          ...item,
          id: item.id.videoId,
        }))
      );
  }

  async #mostPopular(): Promise<Video[]> {
    return axios.get(`/videos/popular.json`).then((res) => res.data.items);
  }
}
