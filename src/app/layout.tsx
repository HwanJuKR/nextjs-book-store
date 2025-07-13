import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SkipNavigation from "@/components/layout/SkipNavigation";
import { QueryProvider } from "@/provider/QueryProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col">
        <SkipNavigation />
        <QueryProvider>
          <Header />
          <main
            id="main"
            className="flex-1 px-4 py-16 bg-gradient-to-br from-blue-50/50 via-white to-gray-50/50"
          >
            {children}
          </main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
