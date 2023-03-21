import axios, { AxiosInstance } from "axios";
import { YoutubeClientClass } from "./youtubeClient";

export default class FakeYoutubeClient implements YoutubeClientClass {
  httpClient: AxiosInstance;
  constructor() {
    this.httpClient = axios.create({
      baseURL: "/videos/",
    });
  }

  async search() {
    return this.httpClient.get("/search.json");
  }
  async videos() {
    return this.httpClient.get("/popular.json");
  }
}
