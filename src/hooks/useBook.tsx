import { bookApi } from "@/lib/bookApi";
import { useInfiniteQuery, useSuspenseQuery } from "@tanstack/react-query";

// 모든 도서 목록 가져오기
export function useInfiniteList() {
  return useInfiniteQuery({
    queryKey: ["infiniteBookList"],
    queryFn: ({ pageParam = 1 }) =>
      bookApi.getBookByPage({ page: pageParam, pageSize: 10 }),
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.hasNextPage ? allPage.length + 1 : undefined;
    },
    initialPageParam: 1,
    retry: 3,
  });
}

// 추천 도서 목록 가져오기
export function useRecommendBook() {
  return useSuspenseQuery({
    queryKey: ["recommendBook"],
    queryFn: () => bookApi.getRecommendBook(),
    retry: 3,
  });
}

// ID로 도서 정보 가져오기
export function useBookById(id: string) {
  return useSuspenseQuery({
    queryKey: ["book", id],
    queryFn: () => bookApi.getBookById(id),
    retry: 3,
  });
}

// 검색으로 도서 가져오기
export function useSearchBook(query: string) {
  return useSuspenseQuery({
    queryKey: ["searchBook", query],
    queryFn: () => bookApi.getSearchBook(query),
    retry: 3,
  });
}
