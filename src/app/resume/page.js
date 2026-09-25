import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/dictionary";

export default async function ResumePage({ dictionary, language = "en" }) {
  const activeDictionary = dictionary || await getDictionary(language);
  const { resume } = portfolioData;
  const content = activeDictionary.resumePage || {};

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#0a0a0a] text-white">
      <div className="absolute inset-0 z-0 h-full w-full">
        <video className="h-full w-full object-cover" autoPlay muted loop playsInline>
          <source src="/last.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10 bg-black/80" />
      </div>

      <div className="relative z-20 flex min-h-screen flex-col">
        <div className="relative w-full px-4 pb-16 pt-32">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <span className="mb-6 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium text-gray-300 backdrop-blur-sm">
              {content.eyebrow || resume.title}
            </span>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white drop-shadow-lg md:text-5xl lg:text-6xl">
              {content.title || resume.subtitle}
            </h1>
            <div className="mb-8 h-1 w-10 rounded-full bg-pink-500" />
            <Link
              href={`/${language}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-6 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-black/60"
            >
              {content.backHome || "Back to Home"}
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-7xl flex-1 px-4 pb-24">
          <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-16">
            <div className="flex w-full flex-col items-center lg:w-[40%]">
              <div className="h-[600px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-md">
                <iframe src={resume.previewImage} className="h-full w-full rounded-xl" title={content.preview || "CV Preview"} />
              </div>
              <p className="mt-4 text-center text-xs text-gray-400">{content.preview || "CV Preview"}</p>
            </div>

            <div className="flex w-full flex-col gap-6 lg:w-[60%]">
              {resume.options.map((option) => {
                const localizedOption = content.options?.[option.type] || {};
                return (
                  <div key={option.id} className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur-md transition hover:bg-white/10">
                    <div className="mb-3 flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-500/20 text-xl text-purple-400">
                        {option.type === "summary" ? "📝" : option.type === "detailed" ? "📄" : "🎓"}
                      </div>
                      <h2 className="text-xl font-bold text-white">{localizedOption.title || option.title}</h2>
                    </div>
                    <p className="mb-5 text-sm leading-relaxed text-gray-400">
                      {localizedOption.description || option.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {option.buttons.map((button, index) => (
                        <a key={index} href={button.link} download className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/20">
                          <span>{button.icon}</span>
                          {localizedOption.download || button.label}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Footer dictionary={activeDictionary} lang={language} />
      </div>
    </main>
  );
}
