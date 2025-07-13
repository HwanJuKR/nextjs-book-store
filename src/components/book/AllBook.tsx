"use client";

import BookItem from "@/components/book/BookItem";
import { BookItemSkeleton } from "@/components/skeleton/SkeletonUi";
import { useInfiniteList } from "@/hooks/useBook";
import { BookData } from "@/interfaces/bookStore.interface";
import { useEffect, useRef } from "react";

export default function AllBook() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteList();
  const bookList = data?.pages.flatMap((page) => page.book) || [];
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        root: null,
        rootMargin: "100px",
        threshold: 0.1,
      }
    );

    const currentRef = moreRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between gap-4 mb-10">
        <div className="flex items-center gap-4">
          <div className="w-2 h-10 bg-gradient-to-b from-gray-500 to-gray-600 rounded-full"></div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-1" data-testid="allBook">모든 도서</h2>
            <p className="text-gray-600">전체 도서 목록을 확인하세요</p>
          </div>
        </div>
        <div className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full text-sm font-medium shadow-lg">
          📚 ALL BOOKS
        </div>
      </div>
      <div className="grid gap-8">
        {bookList.map((book: BookData) => (
          <BookItem key={book.id} {...book} />
        ))}
      </div>

      <div ref={moreRef} className="w-full py-8">
        {isFetchingNextPage && <BookItemSkeleton />}
      </div>
    </section>
  );
}
