"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar({ language = "en", dictionary }) {
  const [time, setTime] = useState("");
  const pathname = usePathname();
  const pathLanguage = pathname?.split("/")[1];
  const activeLanguage = ["en", "id"].includes(pathLanguage)
    ? pathLanguage
    : ["en", "id"].includes(language)
      ? language
      : "en";

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString(activeLanguage === "id" ? "id-ID" : "en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: activeLanguage !== "id"
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [activeLanguage]);

  useEffect(() => {
    document.documentElement.lang = activeLanguage;
  }, [activeLanguage]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-8 sm:py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          href={`/${activeLanguage}`}
          aria-label={`${dictionary?.nav?.currentLocalTime || ""} ${time}`.trim()}
          className="font-mono text-sm font-medium tabular-nums tracking-wide text-white"
        >
          {time}
        </Link>

        <LanguageSwitcher
          language={activeLanguage}
          labels={dictionary?.language}
        />
      </div>
    </header>
  );
}
