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
    try {
      if (page < 1) {
        throw new Error("페이지 번호는 1 이상이어야 합니다.");
      }

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
    } catch (error) {
      console.error("도서 목록을 가져오는 중 오류가 발생했습니다:", error);
      throw new Error("도서 목록을 불러올 수 없습니다. 다시 시도해주세요.");
    }
  },

  // 추천 도서 목록 가져오기
  async getRecommendBook(): Promise<BookData[]> {
    try {
      const recommendedBook = bookData.slice(0, 3);

      if (recommendedBook.length === 0) {
        throw new Error("추천 도서가 없습니다.");
      }

      // 스켈레톤 UI 확인을 위한 1초 딜레이
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return recommendedBook;
    } catch (error) {
      console.error("추천 도서를 가져오는 중 오류가 발생했습니다:", error);
      throw new Error("추천 도서를 불러올 수 없습니다. 다시 시도해주세요.");
    }
  },

  // ID로 도서 정보 가져오기
  async getBookById(id: string): Promise<BookData | null> {
    try {
      if (!id || id.trim().length === 0) {
        throw new Error("도서 ID가 필요합니다.");
      }

      // 스켈레톤 UI 확인을 위한 1초 딜레이
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const book = bookData.find((book) => book.id === id);

      if (!book) {
        return null;
      }

      return book;
    } catch (error) {
      console.error("도서 정보를 가져오는 중 오류가 발생했습니다:", error);
      throw new Error("도서 정보를 불러올 수 없습니다. 다시 시도해주세요.");
    }
  },

  // 검색으로 도서 가져오기
  async getSearchBook(query: string): Promise<BookData[]> {
    try {
      if (!query || query.trim().length === 0) {
        return [];
      }

      // 스켈레톤 UI 확인을 위한 1초 딜레이
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const result = bookData.filter(
        (book) =>
          book.title.toLowerCase().includes(query.toLowerCase()) ||
          book.author.toLowerCase().includes(query.toLowerCase())
      );

      return result;
    } catch (error) {
      console.error("도서 검색 중 오류가 발생했습니다:", error);
      throw new Error("도서 검색을 실행할 수 없습니다. 다시 시도해주세요.");
    }
  },
};
