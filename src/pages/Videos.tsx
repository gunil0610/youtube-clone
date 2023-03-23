import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router-dom";
import VideoList from "../components/VideoList";

export default function Videos() {
  const { keyword } = useParams();

  return (
    <section className="px-4">
      <Suspense fallback={<p>List loading..</p>}>
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
          <VideoList keyword={keyword} />
        </ErrorBoundary>
      </Suspense>
    </section>
  );
}
