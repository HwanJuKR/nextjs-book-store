import BookDetail from "@/components/book/BookDetail";
import { bookApi } from "@/lib/bookApi";
import { createQueryClient } from "@/lib/queryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const book = await bookApi.getBookById(id);

  if (!book) {
    return {
      title: "도서 상세 - BOOK STORE",
      description: "도서의 상세 정보를 확인하세요.",
      keywords: "도서 상세, 책 정보",
    };
  }

  return {
    title: `${book.title} - BOOK STORE`,
    description: `${book.title} - ${book.author} 저자의 도서 정보를 확인하세요.`,
    keywords: `${book.title}, ${book.author}, 도서 상세`,
  };
}

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const queryClient = createQueryClient();

  // 도서 상세 정보 SSR prefetch
  await queryClient.prefetchQuery({
    queryKey: ["book", id],
    queryFn: async () => bookApi.getBookById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BookDetail id={id} />
    </HydrationBoundary>
  );
}
