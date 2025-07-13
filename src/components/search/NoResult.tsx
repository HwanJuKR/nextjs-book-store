export default function NoResult({ q }: { q: string }) {
  return (
    <div className="p-16 max-w-lg mx-auto text-center bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100">
      <div className="flex items-center justify-center mx-auto mb-8 w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full">
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-4" data-testid="noResult">
        검색 결과가 없습니다
      </div>
      <div className="text-gray-600 mb-6">
        입력하신 검색어{" "}
        <span className="font-semibold text-blue-600">&quot;{q}&quot;</span>
        와 일치하는 도서를 찾을 수 없습니다.
        <br />
        다른 검색어로 시도해보세요.
      </div>
      <div className="flex justify-center gap-2">
        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
          JavaScript
        </span>
        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
          React
        </span>
        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
          TypeScript
        </span>
        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
          Node.js
        </span>
      </div>
    </div>
  );
}
