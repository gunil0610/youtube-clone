import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { ChannelResponse } from "../interfaces/Channel";
import { VideoSearchListResponse } from "../interfaces/Search";
import { VideoListResponse } from "../interfaces/Video";

export interface YoutubeClientClass {
  httpClient: AxiosInstance;
  search(
    params: AxiosRequestConfig<any>
  ): Promise<AxiosResponse<VideoSearchListResponse, any>>;
  videos(
    params: AxiosRequestConfig<any>
  ): Promise<AxiosResponse<VideoListResponse, any>>;
  channels(
    params: AxiosRequestConfig<any>
  ): Promise<AxiosResponse<ChannelResponse, any>>;
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
  async channels(params: AxiosRequestConfig<any>) {
    return this.httpClient.get("channels", params);
  }
}
