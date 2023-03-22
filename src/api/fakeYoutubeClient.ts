import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { YoutubeClientClass } from "./youtubeClient";

export default class FakeYoutubeClient implements YoutubeClientClass {
  httpClient: AxiosInstance;
  constructor() {
    this.httpClient = axios.create({
      baseURL: "/videos/",
    });
  }

  async search({ params }: AxiosRequestConfig<any>) {
    const isRelated = params.relatedToVideoId;
    return this.httpClient.get(`/${isRelated ? "related" : "search"}.json`);
  }
  async videos() {
    return this.httpClient.get("/popular.json");
  }
  async channels() {
    return this.httpClient.get("/channel.json");
  }
}
