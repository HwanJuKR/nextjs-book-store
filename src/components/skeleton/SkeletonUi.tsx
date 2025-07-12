// 스켈레톤 UI 기본 애니메이션
const skeletonBaseClass = "shimmer rounded";

export function BookListSkeleton({ count = 3 }: { count?: number } = {}) {
  return (
    <section className="max-w-7xl mx-auto mb-24">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <div className={`w-2 h-10 rounded-full ${skeletonBaseClass}`}></div>
          <div>
            <div
              className={`h-8 rounded-md w-48 mb-2 ${skeletonBaseClass}`}
            ></div>
            <div className={`h-5 rounded-md w-64 ${skeletonBaseClass}`}></div>
          </div>
        </div>
        <div className={`h-9 rounded-full w-32 ${skeletonBaseClass}`}></div>
      </div>
      <div className="grid gap-8">
        {Array.from({ length: count }, (_, index) => (
          <BookItemSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}

export function BookItemSkeleton() {
  return (
    <div className="flex gap-6 p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
      <div className="w-32 h-[157px] flex-shrink-0">
        <div className={`w-full h-full rounded-lg ${skeletonBaseClass}`}></div>
      </div>
      <div className="flex-1">
        <div className={`w-3/4 h-6 mb-2 rounded-md ${skeletonBaseClass}`}></div>
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-1 h-4 rounded-full ${skeletonBaseClass}`}></div>
          <div className={`w-1/2 h-4 rounded-md ${skeletonBaseClass}`}></div>
        </div>
        <div className="space-y-2 mb-5">
          <div className={`w-full h-3 rounded-md ${skeletonBaseClass}`}></div>
          <div className={`w-5/6 h-3 rounded-md ${skeletonBaseClass}`}></div>
          <div className={`w-4/6 h-3 rounded-md ${skeletonBaseClass}`}></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-full ${skeletonBaseClass}`}
            ></div>
            <div>
              <div
                className={`w-16 h-4 mb-1 rounded-md ${skeletonBaseClass}`}
              ></div>
              <div className={`w-20 h-3 rounded-md ${skeletonBaseClass}`}></div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-16 h-4 rounded-md ${skeletonBaseClass}`}></div>
            <div className={`w-6 h-6 rounded-full ${skeletonBaseClass}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BookDetailSkeleton() {
  return (
    <>
      <div className="flex items-center h-[500px] -mx-4 -mt-16 mb-16 bg-gradient-to-br from-gray-300 to-gray-400">
        <div className="flex gap-10 items-center max-w-5xl w-full mx-auto px-4">
          <div className="w-56 h-[285px] flex-shrink-0">
            <div
              className={`w-full h-full rounded-lg ${skeletonBaseClass}`}
            ></div>
          </div>
          <div className="flex-1">
            <div
              className={`w-4/5 h-12 mb-4 rounded-lg ${skeletonBaseClass}`}
            ></div>
            <div
              className={`w-3/5 h-6 mb-6 rounded-md ${skeletonBaseClass}`}
            ></div>
            <div className="space-y-3 mb-8">
              <div
                className={`w-full h-4 rounded-md ${skeletonBaseClass}`}
              ></div>
              <div
                className={`w-5/6 h-4 rounded-md ${skeletonBaseClass}`}
              ></div>
              <div
                className={`w-3/4 h-4 rounded-md ${skeletonBaseClass}`}
              ></div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-full ${skeletonBaseClass}`}
                ></div>
                <div>
                  <div
                    className={`w-20 h-4 mb-1 rounded-md ${skeletonBaseClass}`}
                  ></div>
                  <div
                    className={`w-24 h-3 rounded-md ${skeletonBaseClass}`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
          <div
            className={`w-32 h-8 mb-6 rounded-lg ${skeletonBaseClass}`}
          ></div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div
                className={`w-16 h-5 mb-2 rounded-md ${skeletonBaseClass}`}
              ></div>
              <div className={`w-32 h-6 rounded-md ${skeletonBaseClass}`}></div>
            </div>
            <div>
              <div
                className={`w-16 h-5 mb-2 rounded-md ${skeletonBaseClass}`}
              ></div>
              <div className={`w-28 h-6 rounded-md ${skeletonBaseClass}`}></div>
            </div>
          </div>
        </div>
        <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
          <div
            className={`w-24 h-8 mb-6 rounded-lg ${skeletonBaseClass}`}
          ></div>
          <div className="space-y-4">
            <div className={`w-full h-4 rounded-md ${skeletonBaseClass}`}></div>
            <div className={`w-full h-4 rounded-md ${skeletonBaseClass}`}></div>
            <div className={`w-5/6 h-4 rounded-md ${skeletonBaseClass}`}></div>
            <div className={`w-4/5 h-4 rounded-md ${skeletonBaseClass}`}></div>
            <div className={`w-full h-4 rounded-md ${skeletonBaseClass}`}></div>
            <div className={`w-3/4 h-4 rounded-md ${skeletonBaseClass}`}></div>
          </div>
        </div>
      </div>
    </>
  );
}
