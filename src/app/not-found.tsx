import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-16 max-w-lg mx-auto text-center bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100">
      <div className="flex items-center justify-center w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full">
        <svg
          className="w-10 h-10 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"
          />
        </svg>
      </div>
      <div className="text-4xl font-bold text-gray-900 mb-4">404</div>
      <div className="text-2xl font-bold text-gray-900 mb-8">
        페이지를 찾을 수 없습니다
      </div>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-medium rounded-xl shadow-lg"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        홈으로 돌아가기
      </Link>
    </div>
  );
}
