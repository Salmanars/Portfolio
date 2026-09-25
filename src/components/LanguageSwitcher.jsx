"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher({ language = "en", labels }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (nextLanguage) => {
    const segments = pathname.split("/");
    segments[1] = nextLanguage;
    router.push(segments.join("/") || `/${nextLanguage}`);
  };

  return (
    <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.12em]" aria-label={labels?.label || "Language"}>
      <button
        type="button"
        onClick={() => switchLanguage("en")}
        aria-pressed={language === "en"}
        className={language === "en" ? "text-cyan-300" : "text-neutral-600 transition-colors hover:text-neutral-300"}
      >
        {labels?.english || "EN"}
      </button>
      <span className="text-neutral-700">|</span>
      <button
        type="button"
        onClick={() => switchLanguage("id")}
        aria-pressed={language === "id"}
        className={language === "id" ? "text-cyan-300" : "text-neutral-600 transition-colors hover:text-neutral-300"}
      >
        {labels?.indonesian || "ID"}
      </button>
    </div>
  );
}
