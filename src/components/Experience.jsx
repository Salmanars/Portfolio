export default function Experience({ dictionary }) {
  const content = dictionary?.experience || {};
  const entries = content.entries || [];

  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-16 text-white">
      <div className="mb-12 text-center">
        <h2 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl">
          {content.title}
        </h2>
        <div className="mx-auto mt-4 h-px w-16 bg-purple-400/70" />
      </div>

      <div className="relative ml-5 border-l border-white/15 pl-8 sm:ml-7 sm:pl-12">
        {entries.map((experience) => (
          <article
            key={experience.number}
            className="relative pb-10 last:pb-0"
          >
            <div className="absolute -left-[3.25rem] top-0 flex h-10 w-10 items-center justify-center rounded-full border border-purple-300/60 bg-[#0a0a0a] font-mono text-xs font-semibold text-purple-200 ring-4 ring-[#0a0a0a] sm:-left-[4.125rem]">
              {experience.number}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white p-2">
                    <img
                      src={experience.logo}
                      alt={experience.logoAlt}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold leading-snug sm:text-2xl">
                      {experience.position}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-purple-200">
                      {experience.company}
                      <span className="mx-2 text-neutral-500" aria-hidden="true">
                        ·
                      </span>
                      <span className="text-neutral-400">{experience.location}</span>
                    </p>
                  </div>
                </div>

                <span className="shrink-0 self-start rounded-full border border-white/10 px-3 py-1.5 font-mono text-[11px] tracking-wide text-neutral-300">
                  {experience.period}
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-sm leading-7 text-neutral-300">
                {experience.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-300" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                {experience.stack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
