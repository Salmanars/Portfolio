"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const roles = [
  "[01] Software Engineer",
  "[02] Fullstack Developer",
  "[03] IT Support"
];

export default function Hero({ dictionary, language = "en" }) {
  const content = dictionary?.hero || {};
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const roleTimer = window.setInterval(() => {
      setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
    }, 3000);

    return () => window.clearInterval(roleTimer);
  }, []);

  const activeRole = roles[roleIndex];
  const roleMatch = activeRole.match(/^(\[\d{2}\])\s(.+)$/);
  const roleNumber = roleMatch?.[1] || "[01]";
  const roleName = roleMatch?.[2] || activeRole;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cover bg-center px-4 py-10 text-center sm:px-8 sm:py-20"
      style={{ backgroundImage: "url('/section.png')" }}
    >
      <div className="absolute inset-0 z-10 bg-black/50" />

      <div className="relative z-20 flex max-w-4xl flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[10px] font-medium uppercase tracking-widest text-gray-300 shadow-sm backdrop-blur-sm"
        >
          {content.welcome || "Welcome to my Portfolio"}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mb-4 text-3xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl"
        >
          {content.title || "Who Is Me?"}
        </motion.h1>

        <div className="flex min-h-[4.5rem] w-full max-w-[22rem] items-center justify-center sm:min-h-[3.5rem] sm:max-w-md">
          <div className="flex w-full items-center justify-between gap-4 rounded-md border border-white/10 bg-black/20 px-4 py-3 text-left shadow-lg backdrop-blur-md sm:px-5">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeRole}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="min-w-0 flex-1 font-mono text-xs sm:text-sm"
              >
                <span className="text-cyan-400">{roleNumber}</span>{" "}
                <span className="text-white">{roleName}</span>
              </motion.div>
            </AnimatePresence>

            <div
              className="flex shrink-0 items-center gap-1.5"
              aria-label={`Role ${roleIndex + 1} of ${roles.length}`}
            >
              {roles.map((role, index) => (
                <span
                  key={role}
                  className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                    index === roleIndex ? "bg-cyan-400" : "bg-neutral-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, type: "spring", stiffness: 100 }}
          className="mt-8"
        >
          <Link
            href={`/${language}/contact`}
            className="inline-block rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-sm font-medium text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/20 active:scale-95"
          >
            {content.contactCta || "Get in touch"}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
