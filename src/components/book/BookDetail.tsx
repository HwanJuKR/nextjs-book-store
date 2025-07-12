"use client";

import { useBookById } from "@/hooks/useBook";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function BookDetail({ id }: { id: string }) {
  const { data: book } = useBookById(id);

  if (!book) {
    return notFound();
  }

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <>
      <div
        className="flex items-center h-[500px] -mx-4 -mt-16 mb-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30,58,138,0.85), rgba(30,58,138,0.9)), url('${coverImgUrl}')`,
        }}
      >
        <div className="flex gap-10 items-center max-w-5xl w-full mx-auto px-4 text-white">
          <div className="w-56 h-[285px] flex-shrink-0 relative">
            <Image
              src={coverImgUrl}
              className="object-cover shadow-xl"
              alt={`${title} 책 표지`}
              fill
              sizes="224px"
            />
          </div>
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              추천 도서
            </div>
            <div className="mb-4 text-5xl font-bold">{title}</div>
            <p className="mb-6 text-2xl text-blue-100">{subTitle}</p>

            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full">
                <span className="text-lg font-bold">{author.charAt(0)}</span>
              </div>
              <div>
                <p className="text-lg font-semibold">{author}</p>
                <p className="flex items-center text-blue-200">{publisher}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl p-12 border border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-2 h-10 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
            <div className="text-3xl font-bold text-gray-900">책 소개</div>
          </div>
          <div className="mb-12 text-gray-700 whitespace-pre-line text-lg">
            {description}
          </div>
          <div className="flex items-center justify-end pt-8 border-t border-gray-200">
            <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-600 transition-all duration-200 shadow-lg cursor-pointer">
              구매하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
