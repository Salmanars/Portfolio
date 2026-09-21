export default function Blog() {
  return (
    <section id="blog" className="py-20 px-4 max-w-6xl mx-auto text-white">
      <div className="flex flex-col items-center text-center">
        <span className="mb-4 rounded-full border border-white/10 bg-[#1e1e1e] px-4 py-1 text-[10px] font-semibold tracking-[0.2em] text-purple-300">
          UNDER CONSTRUCTION
        </span>
        <h2 className="text-3xl font-bold md:text-4xl">Blog Archive</h2>
        <div className="mt-3 h-1 w-10 rounded-full bg-pink-500"></div>
      </div>

      <div className="mx-auto mt-10 flex min-h-56 max-w-2xl items-center justify-center border-y border-white/10 px-6 text-center">
        <p className="max-w-lg text-sm leading-relaxed text-gray-400 md:text-base">
          This blog is being prepared. Articles will be available here once they&apos;re ready.
        </p>
      </div>
    </section>
  );
}