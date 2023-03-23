import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
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
          src={`https://www.youtube.com/embed/${video.id}`}
          // frameborder="0"
        ></iframe>
        <div className="p-4">
          <h1>{video.snippet.title}</h1>
          <Suspense
            fallback={
              <div className="flex my-4 mb-8 items-center gap-2">
                <div className="w-10 h-10 bg-zinc-600 rounded-full grid items-center text-center uppercase">
                  {video.snippet.channelTitle[0]}
                </div>
                <p className="h-7 w-56 bg-zinc-600 rounded-md"></p>
              </div>
            }
          >
            <ErrorBoundary fallback={<p>Something went wrong...</p>}>
              <ChannelInfo
                id={video.snippet.channelId}
                name={video.snippet.channelTitle}
              />
            </ErrorBoundary>
          </Suspense>
          <pre className="w-full whitespace-pre-wrap break-words">
            {video.snippet.description}
          </pre>
        </div>
      </article>
      <section className="basis-2/6">
        <Suspense
          fallback={<p className="w-full text-center p-8">Loading...</p>}
        >
          <ErrorBoundary fallback={<p className="p-8">No related video</p>}>
            <RelatedVideos id={video.id} />
          </ErrorBoundary>
        </Suspense>
      </section>
    </section>
  );
}
