"use client";

import BookItem from "@/components/book/BookItem";
import NoResult from "@/components/search/NoResult";
import { useSearchBook } from "@/hooks/useBook";
import { BookData } from "@/interfaces/bookStore.interface";

export default function SearchResult({ q }: { q: string }) {
  const { data: bookList } = useSearchBook(q);

  if (!bookList || bookList.length === 0) {
    return <NoResult q={q} />;
  }

  return (
    <div className="max-w-7xl mx-auto" data-testid="searchResult">
      <div className="grid gap-8">
        {bookList.map((book: BookData) => (
          <BookItem key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
}
