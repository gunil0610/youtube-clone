// https://developers.google.com/youtube/v3/docs/search/list
export interface VideoSearchListResponse {
  kind: "youtube#searchListResponse";
  etag: string;
  nextPageToken?: string;
  prevPageToken?: string;
  regionCode: string;
  pageInfo?: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: VideoSearch[];
}

// https://developers.google.com/youtube/v3/docs/search
export interface VideoSearch {
  kind: "youtube#searchResult";
  etag: string;
  id: {
    kind: "youtube#video";
    videoId: string;
  };
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
