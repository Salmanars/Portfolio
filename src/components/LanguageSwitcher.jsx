"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher({ language = "en", labels }) {
  const pathname = usePathname();
  const router = useRouter();
  const segments = (pathname || "/").split("/");
  const pathLanguage = segments[1];
  const activeLanguage = ["en", "id"].includes(pathLanguage)
    ? pathLanguage
    : language === "id"
      ? "id"
      : "en";

  const switchLanguage = (nextLanguage) => {
    if (!["en", "id"].includes(nextLanguage)) return;

    const nextSegments = [...segments];
    if (["en", "id", "in"].includes(nextSegments[1])) {
      nextSegments[1] = nextLanguage;
    } else {
      nextSegments.splice(1, 0, nextLanguage);
    }

    const nextPath = nextSegments.join("/").replace(/\/+$/, "") || `/${nextLanguage}`;
    router.push(nextPath);
  };

  return (
    <div
      className="flex items-center gap-1 font-mono text-[10px] tracking-[0.12em]"
      aria-label={labels?.label}
    >
      <button
        type="button"
        onClick={() => switchLanguage("en")}
        aria-label={labels?.switchToEnglish}
        aria-pressed={activeLanguage === "en"}
        className={`rounded px-2 py-1 transition-colors ${
          activeLanguage === "en"
            ? "bg-cyan-950 font-bold text-cyan-400"
            : "text-neutral-600 hover:text-neutral-300"
        }`}
      >
        {labels?.english || "EN"}
      </button>
      <span className="text-neutral-700">|</span>
      <button
        type="button"
        onClick={() => switchLanguage("id")}
        aria-label={labels?.switchToIndonesian}
        aria-pressed={activeLanguage === "id"}
        className={`rounded px-2 py-1 transition-colors ${
          activeLanguage === "id"
            ? "bg-cyan-950 font-bold text-cyan-400"
            : "text-neutral-600 hover:text-neutral-300"
        }`}
      >
        {labels?.indonesian || "ID"}
      </button>
    </div>
  );
}
