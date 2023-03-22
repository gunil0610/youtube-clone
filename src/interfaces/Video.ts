export interface CommonVideo {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    channelTitle: string;
    thumbnails: {
      [key: string]: {
        url: string;
        width: number;
        height: number;
      };
    };
    liveBroadcastContent: string;
  };
}

// https://developers.google.com/youtube/v3/docs/videos/list
export interface VideoListResponse {
  kind: "youtube#videoListResponse";
  etag: string;
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo?: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Video[];
}

// https://developers.google.com/youtube/v3/docs/videos#resource
export interface Video {
  kind: "youtube#video";
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    channelTitle: string;
    thumbnails: {
      [key: string]: {
        url: string;
        width: number;
        height: number;
      };
    };
    tags?: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage?: string;
  };
}
