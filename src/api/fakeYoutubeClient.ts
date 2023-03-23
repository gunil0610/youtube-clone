import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { YoutubeClientClass } from "./youtubeClient";

const TIME_OUT_IN_MS = 3000;

export default class FakeYoutubeClient implements YoutubeClientClass {
  httpClient: AxiosInstance;
  constructor() {
    this.httpClient = axios.create({
      baseURL: "/videos/",
    });
  }

  async search({ params }: AxiosRequestConfig<any>): Promise<AxiosResponse> {
    const isRelated = params.relatedToVideoId;
    return new Promise((res) => {
      setTimeout(() => {
        res(this.httpClient.get(`/${isRelated ? "related" : "search"}.json`));
      }, TIME_OUT_IN_MS);
    });
    // return this.httpClient.get(`/${isRelated ? "related" : "search"}.json`);
  }
  async videos(): Promise<AxiosResponse> {
    return new Promise((res, reject) => {
      setTimeout(() => {
        res(this.httpClient.get("/popular.json"));
        // reject("something wrong");
      }, TIME_OUT_IN_MS);
    });
    // return this.httpClient.get("/popular.json");
  }
  async channels(): Promise<AxiosResponse> {
    return new Promise((res) => {
      setTimeout(() => {
        res(this.httpClient.get("/channel.json"));
      }, TIME_OUT_IN_MS);
    });
    // return this.httpClient.get("/channel.json");
  }
}
