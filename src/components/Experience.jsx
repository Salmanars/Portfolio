import { portfolioData } from '@/data/portfolioData';

export default function Experience() {
  const data = portfolioData.experiences;
  const section = portfolioData.sectionTitles.experience;

  return (
    <section id="experience" className="py-16">
      <div className="mb-10 flex items-center gap-3">
        <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500" />
        <h2 className="text-3xl font-bold text-white">{section.title}</h2>
      </div>

      <div className="relative ml-6 border-l-2 border-purple-500/30 pl-10">
        {data.map((item) => (
          <div key={item.title} className="relative mb-10 last:mb-0">
            <div className="absolute -left-5 top-2 h-4 w-4 rounded-full border-2 border-purple-500 bg-black shadow-[0_0_0_8px_rgba(168,85,247,0.08)]" />
            <div className="rounded-[2rem] border border-white/10 bg-[#1a1a1a] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-purple-300">{item.company}</p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 lg:ml-6">
                  {item.year}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
