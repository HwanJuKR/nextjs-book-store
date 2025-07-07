import BookItem from "@/components/BookItem";
import ErrorMessage from "@/components/ErrorMessage";
import { BookData } from "@/interfaces/bookStore.interface";
import { getBook } from "@/lib/api";

export default async function AllBook() {
  const result = await getBook();

  if (!result.success) {
    return (
      <section className="max-w-7xl mx-auto">
        <ErrorMessage message={"전체 도서 목록을 가져오는 데 실패했습니다."} />
      </section>
    );
  }

  const book = result.data;

  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between gap-4 mb-10">
        <div className="flex items-center gap-4">
          <div className="w-2 h-10 bg-gradient-to-b from-gray-500 to-gray-600 rounded-full"></div>
          <div>
            <p className="text-3xl font-bold text-gray-900 mb-1">모든 도서</p>
            <p className="text-gray-600">전체 도서 목록을 확인하세요</p>
          </div>
        </div>
        <div className="bg-gray-100 text-gray-700 px-5 py-2 rounded-full text-sm font-medium shadow-lg">
          📚 ALL BOOKS
        </div>
      </div>
      <div className="grid gap-8">
        {book.map((book: BookData) => (
          <BookItem key={book.id} {...book} />
        ))}
      </div>
    </section>
  );
}
