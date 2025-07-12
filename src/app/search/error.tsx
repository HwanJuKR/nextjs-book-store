"use client";

import ErrorMessage from "@/components/error/ErrorMessage";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  const router = useRouter();

  const handleRetry = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <section className="mx-auto p-16">
      <ErrorMessage
        message={"검색 결과를 불러오는 중 오류가 발생했습니다."}
        onRetry={handleRetry}
      />
    </section>
  );
}

