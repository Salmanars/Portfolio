import { FaTrophy } from "react-icons/fa";

export default function Achievements({ dictionary }) {
  const content = dictionary?.achievements || {};

  return (
    <section id="achievements" className="py-20 px-4 max-w-6xl mx-auto text-white">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="bg-[#1e1e1e] px-4 py-1 rounded-full text-[10px] text-gray-400 font-medium tracking-wider mb-4 border border-white/5">
          {content.eyebrow || "Recognition & Accomplishments"}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold">{content.title || "Awards & Achievements"}</h2>
        <div className="w-10 h-1 bg-pink-500 rounded-full mt-3"></div>
      </div>

      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-[#151515] p-6 shadow-lg sm:p-8">
        <div className="flex items-start gap-4 sm:gap-5">
          <div className="mt-1 shrink-0 rounded-xl border border-amber-400/20 bg-amber-400/10 p-3 text-amber-300">
            <FaTrophy className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-amber-300">
              {content.highlightCategory}
            </p>
            <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl">
              {content.highlightTitle}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              {content.highlightDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}