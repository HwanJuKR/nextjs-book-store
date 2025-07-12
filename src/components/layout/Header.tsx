import SearchInput from "@/components/search/SearchInput";
import Link from "next/link";
import { Suspense } from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-100 px-4 py-4 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href={"/"} className="flex items-center gap-2 text-2xl font-bold">
          <div className="flex items-center justify-center w-8 h-8">📚</div>
          BOOK STORE
        </Link>
        <Suspense fallback={null}>
          <SearchInput />
        </Suspense>
      </div>
    </header>
  );
}
