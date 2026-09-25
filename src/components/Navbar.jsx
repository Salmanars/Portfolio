"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar({ language = "en", dictionary }) {
  const pathname = usePathname();
  const router = useRouter();
  const pathLanguage = pathname.split("/")[1];
  const activeLanguage = ["en", "id"].includes(pathLanguage) ? pathLanguage : language;
  const labels = dictionary?.nav || {};

  const switchLanguage = (nextLanguage) => {
    const segments = pathname.split("/");
    segments[1] = nextLanguage;
    router.push(segments.join("/") || `/${nextLanguage}`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-8 sm:py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          href={`/${language}`}
          className="font-mono text-sm font-semibold tracking-[0.16em] text-white transition-colors hover:text-cyan-300"
        >
          {labels.logo || "salman_"}
        </Link>

        <div
          className="flex items-center gap-1 font-mono text-[10px] tracking-[0.12em]"
          aria-label={dictionary?.language?.label || "Language"}
        >
          {["en", "id"].map((locale, index) => (
            <span key={locale} className="flex items-center gap-1">
              {index > 0 && <span className="text-neutral-700">|</span>}
              <button
                type="button"
                onClick={() => switchLanguage(locale)}
                aria-pressed={activeLanguage === locale}
                className={`rounded px-2 py-1 transition-colors ${
                  activeLanguage === locale
                    ? "bg-cyan-950 font-bold text-cyan-400"
                    : "text-neutral-600 hover:text-neutral-300"
                }`}
              >
                {locale.toUpperCase()}
              </button>
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
