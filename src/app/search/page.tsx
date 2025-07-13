import SearchResult from "@/components/search/SearchResult";
import { bookApi } from "@/lib/bookApi";
import { createQueryClient } from "@/lib/queryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q || "";
  const queryClient = createQueryClient();

  // 도서 검색 SSR prefetch
  await queryClient.prefetchQuery({
    queryKey: ["searchBook", query],
    queryFn: () => bookApi.getSearchBook(query),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SearchResult q={query} />
    </HydrationBoundary>
  );
}
