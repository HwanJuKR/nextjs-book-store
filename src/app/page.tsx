import BookItem from "@/components/bookItem";
import bookData from "@/mock/book.json";

export default function Main() {
  const recommendBook = bookData.slice(0, 3);

  return (
    <>
      {/* 지금 추천하는 도서 */}
      <section className="max-w-7xl mx-auto mb-24">
        <div className="flex items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-4">
            <div className="w-2 h-10 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
            <div>
              <p className="text-3xl font-bold text-gray-900 mb-1">
                지금 추천하는 도서
              </p>
              <p className="text-gray-600">개발자들이 사랑하는 필수 도서들</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg">
            🔥 HOT PICK
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {recommendBook.map((book) => (
              <BookItem key={book.id} {...book} />
            ))}
          </div>
        </div>
      </section>

      {/* 모든 도서 */}
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
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {bookData.map((book) => (
              <BookItem key={book.id} {...book} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
