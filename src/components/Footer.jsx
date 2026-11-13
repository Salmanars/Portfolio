import { portfolioData } from '@/data/portfolioData';

const socialIcons = {
  github: '/github_icon.jpg',
  linkedin: '/linkedin_icon.jpg',
  instagram: '/instagram_icon.webp'
};

export default function Footer({ dictionary, lang, language = "en" }) {
  const requestedLanguage = lang || language;
  const activeLanguage = requestedLanguage === "id" ? "id" : "en";
  const data = portfolioData.footer;
  const content = dictionary?.footer || {};
  const links = content.links || {};
  const localizedLinks = [
    { key: "about", href: "#about" },
    { key: "project", href: "#projects" },
    { key: "blog", href: "#blog" },
    { key: "awards", href: "#achievements" },
    { key: "guestbook", href: "#guestbook" }
  ].map((link) => {
    return {
      ...link,
      href: `/${activeLanguage}${link.href}`,
      label: links[link.key]
    };
  });
  const socialLinks = portfolioData.contact.items.filter(({ icon }) =>
    ["github", "linkedin", "instagram"].includes(icon)
  );

  return (
    <footer className="rounded-[2rem] border border-white/10 bg-[#1a1a1a] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.35)] md:p-10">
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
        <div className="flex min-w-0 flex-col gap-3">
          <img
            src="/salman%20jas.png"
            alt={data.name}
            className="h-16 w-16 rounded-2xl object-cover"
          />
          <h3 className="text-xl font-semibold text-white">{data.name}</h3>
          <p className="max-w-sm text-sm leading-relaxed text-slate-400">
            Building <span className="text-orange-400">digital experiences</span> that matter.
          </p>
        </div>

        <div className="flex min-w-0 flex-col gap-3">
          <h4 className="text-sm font-semibold text-white">{content.navigation}</h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-300 lg:grid-cols-1">
            {localizedLinks.map((link) => (
              <a key={link.key} href={link.href} className="transition hover:text-orange-300">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-3">
          <h4 className="text-sm font-semibold text-white">{content.link}</h4>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              return (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 transition-all duration-200 hover:bg-white/10"
                >
                  <img
                    src={socialIcons[social.icon]}
                    alt=""
                    aria-hidden="true"
                    className={
                      social.icon === "instagram"
                        ? "h-6 w-6 scale-150 object-contain"
                        : "h-6 w-6 rounded-md object-cover"
                    }
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>{data.copyright}</p>
        <p>{data.email}</p>
      </div>
    </footer>
  );
}
