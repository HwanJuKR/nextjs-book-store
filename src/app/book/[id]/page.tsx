import BookDetail from "@/components/book/BookDetail";
import { bookApi } from "@/lib/bookApi";
import { createQueryClient } from "@/lib/queryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

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
