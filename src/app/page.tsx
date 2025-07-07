import AllBook from "@/components/AllBook";
import RecommendBook from "@/components/RecommendBook";
import { BookListSkeleton } from "@/components/SkeletonUI";
import { Suspense } from "react";

export default function Main() {
  return (
    <>
      {/* 지금 추천하는 도서 */}
      <Suspense fallback={<BookListSkeleton />}>
        <RecommendBook />
      </Suspense>

      {/* 모든 도서 */}
      <Suspense fallback={<BookListSkeleton />}>
        <AllBook />
      </Suspense>
    </>
  );
}
