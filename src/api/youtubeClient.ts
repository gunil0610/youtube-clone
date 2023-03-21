import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export interface YoutubeClientClass {
  httpClient: AxiosInstance;
  search(params: AxiosRequestConfig<any>): Promise<AxiosResponse<any, any>>;
  videos(params: AxiosRequestConfig<any>): Promise<AxiosResponse<any, any>>;
}

export default class YoutubeClient implements YoutubeClientClass {
  httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3/",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(params: AxiosRequestConfig<any>) {
    return this.httpClient.get("search", params);
  }
  async videos(params: AxiosRequestConfig<any>) {
    return this.httpClient.get("videos", params);
  }
}
