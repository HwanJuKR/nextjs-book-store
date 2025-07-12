"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const [search, setSearch] = useState(q || "");

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    if (!search.trim()) return;
    router.push(`/search?q=${search.trim()}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl shadow-sm">
      <input
        value={search}
        onChange={onChangeSearch}
        onKeyDown={onKeyDown}
        className="w-full min-w-0 px-3 py-2 text-sm bg-transparent border-none outline-none placeholder-gray-500 text-gray-900"
        placeholder="도서 또는 저자 검색"
      />
      <button
        onClick={onSubmit}
        className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors whitespace-nowrap cursor-pointer"
      >
        검색
      </button>
    </div>
  );
}
