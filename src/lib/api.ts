"use server";

import bookData from "@/mock/book.json";
import { notFound } from "next/navigation";

// 모든 도서 목록 가져오기
export async function getBook() {
  try {
    // 스켈레톤 UI 확인을 위해 1초 딜레이 추가
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      data: bookData,
    };
  } catch {
    return {
      success: false,
      data: [],
    };
  }
}

// ID로 도서 정보 가져오기
export async function getBookById(id: string) {
  try {
    const book = bookData.find((book) => book.id === parseInt(id));

    if (!book) {
      notFound();
    }

    return {
      success: true,
      data: book,
    };
  } catch {
    notFound();
  }
}
