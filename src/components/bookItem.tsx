import type { BookData } from "@/interfaces/bookStore.interface";
import Link from "next/link";
import Image from "next/image";

export default function BookItem({
  id,
  title,
  subTitle,
  description,
  author,
  publisher,
  coverImgUrl,
}: BookData) {
  return (
    <Link href={`/book/${id}`} className="group block">
      <div className="flex gap-6 p-8 bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-blue-200">
        <div className="w-32 h-[157px] flex-shrink-0">
          <Image
            src={coverImgUrl}
            className="object-cover shadow-lg"
            alt=""
            width={128}
            height={157}
          />
        </div>
        <div className="flex-1">
          <div className="mb-2 text-xl font-bold text-gray-900 line-clamp-2">
            {title}
          </div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
            <p className="text-sm font-medium text-blue-600 line-clamp-1">
              {subTitle}
            </p>
          </div>
          <div className="text-gray-600 text-sm mb-5 line-clamp-3">
            {description}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-full shadow-lg">
                <span className="text-white text-sm font-bold">
                  {author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{author}</p>
                <p className="text-xs text-gray-500">{publisher}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-blue-600">
              <span className="text-sm font-medium">자세히 보기</span>
              <div className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
