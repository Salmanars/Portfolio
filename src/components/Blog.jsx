export default function Blog({ dictionary }) {
  const content = dictionary?.blog || {};

  return (
    <section id="blog" className="py-20 px-4 max-w-6xl mx-auto text-white">
      <div className="flex flex-col items-center text-center">
        <span className="mb-4 rounded-full border border-white/10 bg-[#1e1e1e] px-4 py-1 text-[10px] font-semibold tracking-[0.2em] text-purple-300">
          {content.eyebrow || "UNDER CONSTRUCTION"}
        </span>
        <h2 className="text-3xl font-bold md:text-4xl">{content.title || "Blog Archive"}</h2>
        <div className="mt-3 h-1 w-10 rounded-full bg-pink-500"></div>
      </div>

      <div className="mx-auto mt-8 flex w-full max-w-2xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-left text-lg font-semibold text-gray-200">
          {content.latestPosts || "Latest Posts"}
        </h3>
        <input
          type="search"
          placeholder={content.searchPlaceholder || "Search articles..."}
          aria-label={content.searchPlaceholder || "Search articles..."}
          className="w-full rounded-md border border-white/10 bg-black/20 px-4 py-2 text-sm text-white outline-none placeholder:text-gray-500 focus:border-cyan-400/50 sm:max-w-xs"
        />
      </div>

      <div className="mx-auto mt-10 flex min-h-56 max-w-2xl items-center justify-center border-y border-white/10 px-6 text-center">
        <p className="max-w-lg text-sm leading-relaxed text-gray-400 md:text-base">
          {content.empty || content.description || "This blog is being prepared. Articles will be available here once they're ready."}
        </p>
      </div>
    </section>
  );
}