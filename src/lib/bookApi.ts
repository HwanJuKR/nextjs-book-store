import bookData from "@/mock/book.json";
import {
  BookByPage,
  BookByPageParams,
  BookData,
} from "@/interfaces/bookStore.interface";

export const bookApi = {
  // 모든 도서 목록 가져오기
  async getBookByPage({
    page,
    pageSize = 10,
  }: BookByPageParams): Promise<BookByPage> {
    // 스켈레톤 UI 확인을 위한 1초 딜레이
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const book = bookData.slice(startIndex, endIndex);
    const hasNextPage = endIndex < bookData.length;

    return {
      book,
      hasNextPage,
      totalCount: bookData.length,
    };
  },

  // 추천 도서 목록 가져오기
  async getRecommendBook(): Promise<BookData[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return bookData.slice(0, 3);
  },

  // ID로 도서 정보 가져오기
  async getBookById(id: string): Promise<BookData | null> {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return bookData.find((book) => book.id === id) || null;
  },

  // 검색으로 도서 가져오기
  async getSearchBook(query: string): Promise<BookData[]> {
    if (!query.trim()) {
      return [];
    }

    return bookData.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );
  },
};
