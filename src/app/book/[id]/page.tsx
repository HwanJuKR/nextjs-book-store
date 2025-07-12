import { bookApi } from "@/lib/bookApi";
import { queryClient } from "@/lib/queryClient";
import {
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import BookDetail from "@/components/book/BookDetail";

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

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
