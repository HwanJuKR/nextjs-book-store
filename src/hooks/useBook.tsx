import { useSuspenseQuery } from "@tanstack/react-query";
import { bookApi } from "@/lib/bookApi";

// 모든 도서 목록 가져오기
export function useBook() {
  return useSuspenseQuery({
    queryKey: ["allBook"],
    queryFn: () => bookApi.getAllBook(),
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
