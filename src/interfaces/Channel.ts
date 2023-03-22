// https://developers.google.com/youtube/v3/docs/channels/list
export interface ChannelResponse {
  kind: string;
  etag: string;
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Channel[];
}

// https://developers.google.com/youtube/v3/docs/channels#resource
export interface Channel {
  kind: "youtube#channel";
  etag: string;
  id: string;
  snippet: {
    title: string;
    description: string;
    customUrl: string;
    publishedAt: string;
    thumbnails: {
      [key: string]: {
        url: string;
        width?: number;
        height?: number;
      };
    };
    defaultLanguage?: string;
    localized?: {
      title: string;
      description: string;
    };
    country: string;
  };
}
