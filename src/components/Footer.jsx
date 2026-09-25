import { portfolioData } from '@/data/portfolioData';

export default function Footer({ dictionary, lang, language = "en" }) {
  const activeLanguage = lang || language;
  const data = portfolioData.footer;
  const content = dictionary?.footer || {};
  const links = content.links || {};
  const localizedLinks = [
    ...data.navLinks,
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" }
  ].map((link) => {
    const localizedHref = link.label === "Blog"
      ? `/${activeLanguage}/blog`
      : link.href.startsWith("#")
        ? `/${activeLanguage}${link.href}`
      : ["Resume", "Contact"].includes(link.label)
        ? `/${activeLanguage}${link.href}`
        : link.href;

    return {
      ...link,
      href: localizedHref,
      label: links[link.label.toLowerCase()] || link.label
    };
  });

  return (
    <footer className="rounded-[2rem] border border-white/10 bg-[#1a1a1a] px-8 py-10 shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">{data.name}</h3>
          <p className="mt-3 text-sm text-slate-400">{content.description || data.description}</p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">{content.navigation || "Navigation"}</h4>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            {localizedLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-purple-300">
                {links[link.label.toLowerCase()] || link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-white">{content.link || "Link"}</h4>
          <div className="flex flex-wrap items-center gap-3">
            {data.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-purple-400/40 hover:bg-purple-500/10"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="max-w-xs">
          <h4 className="mb-4 text-sm font-semibold text-white">{content.updatesTitle || "Never Miss an Update"}</h4>
          <p className="text-sm leading-relaxed text-slate-400">
            {content.updatesDescription || "Get an email when there's something new."}
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500 lg:flex lg:items-center lg:justify-between">
        <p>{data.copyright}</p>
        <p className="mt-3 lg:mt-0">{data.email}</p>
      </div>
    </footer>
  );
}
