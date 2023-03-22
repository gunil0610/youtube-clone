import { Suspense } from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();

  return (
    <section className="px-0 lg:px-4 flex lg:flex-row flex-col">
      <article className="basis-4/6 w-full">
        <iframe
          id="player"
          // type="text/html"
          title={`${video.snippet.title}`}
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${video.id}`}
          // frameborder="0"
        ></iframe>
        <div className="p-4">
          <h1>{video.snippet.title}</h1>
          <Suspense
            fallback={
              <div className="w-40 h-40 bg-zinc-600">
                {video.snippet.channelTitle[0]}
              </div>
            }
          >
            <ChannelInfo
              id={video.snippet.channelId}
              name={video.snippet.channelTitle}
            />
          </Suspense>
          <pre className="w-full whitespace-pre-wrap break-words">
            {video.snippet.description}
          </pre>
        </div>
      </article>
      <section className="basis-2/6">
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
