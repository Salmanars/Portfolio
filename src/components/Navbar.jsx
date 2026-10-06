"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar({ language = "en", dictionary }) {
  const [time, setTime] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const pathLanguage = pathname.split("/")[1];
  const activeLanguage = ["en", "id"].includes(pathLanguage) ? pathLanguage : language;

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

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
          aria-label={time ? `Current local time ${time}` : "Current local time"}
          className="font-mono text-sm font-medium tabular-nums tracking-wide text-white"
        >
          {time}
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
