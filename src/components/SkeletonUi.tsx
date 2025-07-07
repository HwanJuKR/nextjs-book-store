export function BookListSkeleton() {
  return (
    <section className="max-w-7xl mx-auto mb-24">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <div className="w-2 h-10 bg-gray-200 rounded-full animate-pulse"></div>
          <div>
            <div className="h-8 bg-gray-200 rounded-md w-48 mb-2 animate-pulse"></div>
            <div className="h-5 bg-gray-200 rounded-md w-64 animate-pulse"></div>
          </div>
        </div>
        <div className="h-9 bg-gray-200 rounded-full w-24 animate-pulse"></div>
      </div>
      <div className="grid gap-8">
        {[1, 2, 3].map((i) => (
          <BookItemSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}

export function BookItemSkeleton() {
  return (
    <div className="flex gap-6 p-8 bg-white rounded-3xl shadow-sm border border-gray-100 animate-pulse">
      <div className="w-32 h-[157px] flex-shrink-0">
        <div className="w-full h-full bg-gray-200 rounded-lg"></div>
      </div>
      <div className="flex-1">
        <div className="w-3/4 h-6 mb-2 bg-gray-200 rounded-md"></div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1 h-4 bg-gray-200 rounded-full"></div>
          <div className="w-1/2 h-4 bg-gray-200 rounded-md"></div>
        </div>
        <div className="space-y-1 mb-5">
          <div className="w-full h-4 bg-gray-200 rounded-md"></div>
          <div className="w-5/6 h-4 bg-gray-200 rounded-md"></div>
          <div className="w-4/6 h-4 bg-gray-200 rounded-md"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div>
              <div className="w-16 h-4 mb-1 bg-gray-200 rounded-md"></div>
              <div className="w-20 h-3 bg-gray-200 rounded-md"></div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-16 h-4 bg-gray-200 rounded-md"></div>
            <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
