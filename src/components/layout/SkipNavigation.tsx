export default function SkipNavigation() {
  return (
    <div
      className="
        absolute
        w-full
        top-0
        z-[100000]
      "
    >
      <a
        href="#main"
        className="
          absolute
          left-0
          w-full
          -top-[100px]
          text-center
          text-white
          bg-neutral-900
          transition-all
          duration-200
          hover:top-0
          hover:z-[100000]
          focus:top-0
          focus:z-[100000]
          py-2
        "
      >
        본문 바로가기
      </a>
    </div>
  );
}
