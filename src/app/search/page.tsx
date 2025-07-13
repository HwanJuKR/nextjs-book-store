import SearchResult from "@/components/search/SearchResult";
import { bookApi } from "@/lib/bookApi";
import { createQueryClient } from "@/lib/queryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Metadata } from "next";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
  const { q } = await searchParams;
  const query = q || "";

  if (!query.trim()) {
    return {
      title: "도서 검색 - BOOK STORE",
      description:
        "원하는 도서를 검색해보세요. 제목, 저자명으로 검색할 수 있습니다.",
      keywords: "도서 검색, 책 검색, 저자 검색",
    };
  }

  return {
    title: `"${query}" 검색 결과 - BOOK STORE`,
    description: `"${query}" 검색 결과를 확인하세요. 제목, 저자명으로 검색한 결과입니다.`,
    keywords: `${query}, 도서 검색, 책 검색`,
  };
}

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
