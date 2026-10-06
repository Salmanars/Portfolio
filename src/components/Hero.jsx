"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Hero({ dictionary, language = "en" }) {
  const content = dictionary?.hero || {};
  const roles = content.roles;
  const rotatingWords = content.rotatingWords;
  const [roleIndex, setRoleIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const roleTimer = window.setInterval(() => {
      setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
    }, 3000);

    return () => window.clearInterval(roleTimer);
  }, []);

  useEffect(() => {
    const wordTimer = window.setInterval(() => {
      setWordIndex((currentIndex) => (currentIndex + 1) % rotatingWords.length);
    }, 2500);

    return () => window.clearInterval(wordTimer);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[url('/section.png')] bg-cover bg-center bg-no-repeat px-4 py-10 text-center sm:px-8 sm:py-20"
    >
      <div className="absolute inset-0 z-[1] bg-black/35" aria-hidden="true" />

      <div className="relative z-20 flex max-w-4xl flex-col items-center">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-6 inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-white"
        >
          <span aria-hidden="true">✨</span>
          <span>{content.roleIntro}</span>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="text-white"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.h1
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mb-4 text-3xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl"
        >
          {content.headlineStart}
          <span className="inline-block align-middle mx-2 -rotate-6 hover:rotate-0 transition-transform duration-300 shadow-md rounded-lg overflow-hidden">
            <Image
              src="/salman jas.png"
              alt={content.profileAlt}
              width={56}
              height={70}
              className="object-cover rounded-lg"
            />
          </span>
          {" "}{content.headlineEnd}
        </motion.h1>

        <div className="overflow-hidden py-2" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={rotatingWords[wordIndex]}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="text-3xl font-bold text-purple-400 sm:text-4xl lg:text-5xl"
            >
              {rotatingWords[wordIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, type: "spring", stiffness: 100 }}
          className="mt-8"
        >
          <Link
            href={`/${language}/contact`}
            className="inline-block rounded-full border border-white/30 bg-white/10 px-6 py-2.5 text-sm font-medium text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/20 active:scale-95"
          >
            {content.contactCta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
