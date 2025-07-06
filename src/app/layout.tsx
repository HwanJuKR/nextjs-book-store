import SearchInput from "@/components/searchInput";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-100 px-4 py-4 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-sm">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <Link
              href={"/"}
              className="flex items-center gap-2 text-2xl font-bold"
            >
              <div className="flex items-center justify-center w-8 h-8">📚</div>
              BOOK STORE
            </Link>
            <SearchInput />
          </div>
        </header>
        <main className="flex-1 px-4 py-16 bg-gradient-to-br from-blue-50/50 via-white to-gray-50/50">
          {children}
        </main>
        <footer className="py-8 bg-gradient-to-r from-gray-100 to-gray-200 text-center text-gray-600 border-t border-gray-200">
          <p className="max-w-7xl mx-auto text-xs text-gray-500">
            © 2025 Created by HwanJu
          </p>
        </footer>
      </body>
    </html>
  );
}
