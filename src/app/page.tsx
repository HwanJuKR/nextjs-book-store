import AllBook from "@/components/book/AllBook";
import RecommendBook from "@/components/book/RecommendBook";
import { bookApi } from "@/lib/bookApi";
import { createQueryClient } from "@/lib/queryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export const metadata = {
  title: "BOOK STORE",
  description: "개발자들이 사랑하는 필수 도서들을 확인하세요",
  keywords: "개발, 프로그래밍, 도서",
};

export default async function Main() {
  const queryClient = createQueryClient();

  // 추천 도서 SSR prefetch
  await queryClient.prefetchQuery({
    queryKey: ["recommendBook"],
    queryFn: () => bookApi.getRecommendBook(),
  });

  // 모든 도서 SSR prefetch
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["infiniteBookList"],
    queryFn: () => bookApi.getBookByPage({ page: 1, pageSize: 10 }),
    initialPageParam: 1,
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        {/* 지금 추천하는 도서 */}
        <RecommendBook />
        {/* 모든 도서 */}
        <AllBook />
      </HydrationBoundary>
    </>
  );
}
