"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function DarkModernBackground() {
  const { scrollYProgress } = useScroll();
  const beamY = useTransform(scrollYProgress, [0, 1], ["-30vh", "100vh"]);
  const reverseBeamY = useTransform(scrollYProgress, [0, 1], ["100vh", "-30vh"]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="dark-grid-overlay absolute inset-0 opacity-70" />

      <motion.div
        className="absolute left-[22%] top-0 h-[34vh] w-px bg-gradient-to-b from-transparent via-cyan-300/50 to-transparent shadow-[0_0_18px_2px_rgba(103,232,249,0.22)]"
        style={{ y: beamY }}
      />
      <motion.div
        className="absolute right-[18%] top-0 h-[28vh] w-px bg-gradient-to-b from-transparent via-violet-300/40 to-transparent shadow-[0_0_18px_2px_rgba(196,181,253,0.18)]"
        style={{ y: reverseBeamY }}
      />
      <motion.div
        className="absolute left-[22%] top-0 h-[34vh] w-12 -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-300/[0.06] to-transparent blur-xl"
        style={{ y: beamY }}
      />
    </div>
  );
}
