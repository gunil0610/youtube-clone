export interface Video {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    channelTitle: string;
    tags?: string[];
    categoryId?: string;
    thumbnails: {
      [key: string]: {
        url: string;
        width?: string;
        height?: string;
      };
    };
    liveBroadcastContent: string;
    defaultAudioLanguage?: string;
    localized?: {
      description: string;
      title: string;
    };
  };
}

export interface VideoWithKeyword {
  kind: string;
  etag: string;
  id: {
    kind: string;
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
        width?: string;
        height?: string;
      };
    };
    liveBroadcastContent: string;
    publishTime: string;
  };
}
