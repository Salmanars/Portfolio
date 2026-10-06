"use client";

import Hero from "./Hero";
import WhoIsMe from "./WhoIsMe";
import About from "./About";
import Experience from "./Experience";
import TechStack from "./TechStack";
import FeaturedProjects from "./FeaturedProjects";
import Achievements from "./Achievements";
import Blog from "./Blog";
import DarkModernBackground from "./DarkModernBackground";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function HomePage({ dictionary, language = "en" }) {
  return (
    <main className="relative isolate min-h-screen w-full overflow-x-hidden text-white">
      <Hero dictionary={dictionary} language={language} />

      <div className="relative isolate overflow-hidden">
        <DarkModernBackground />
        <div className="relative z-10">
          <WhoIsMe dictionary={dictionary} />

          <div className="mx-auto max-w-6xl space-y-24 px-4 pb-20 sm:px-6 lg:px-8">
            <About dictionary={dictionary} language={language} />
            <Experience dictionary={dictionary} />
            <TechStack dictionary={dictionary} />
            <FeaturedProjects dictionary={dictionary} language={language} />

            <div className="relative my-4 h-32 w-full overflow-hidden border-b border-neutral-800">
              <div className="absolute bottom-0 left-0 z-0 h-px w-full bg-neutral-800" aria-hidden="true" />
              <motion.div
                className="absolute bottom-0 left-0 z-10 flex h-24 items-end"
                initial={{ x: "-30vw", scale: 0.8 }}
                animate={{ x: "130vw", y: [0, -15, 0, 15, 0], scale: [0.8, 1.1, 0.8] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              >
                {["/animasi2.gif", "/animasi4.gif", "/animasi5.gif", "/animasi6.gif"].map((src, index) => (
                  <div key={src} className="relative flex h-24 shrink-0 items-end" style={{ marginLeft: index === 0 ? 0 : "120px" }}>
                    <div className="absolute bottom-0 left-1/2 z-0 h-3 w-12 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/20 blur-sm" />
                    <img src={src} alt={`Character ${index + 1}`} className="relative z-10 block h-24 w-auto translate-y-[-1px] object-contain drop-shadow-xl" />
                  </div>
                ))}
              </motion.div>
            </div>

            <Achievements dictionary={dictionary} />
          </div>
        </div>
      </div>

      <div className="relative isolate w-full overflow-hidden">
        <video
          key="/blog1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src="/blog1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-0 bg-black/50" aria-hidden="true" />
        <div className="relative z-10 px-4 pb-10">
          <div className="mx-auto max-w-6xl">
            <Blog dictionary={dictionary} />
          </div>
          <Footer dictionary={dictionary} language={language} />
        </div>
      </div>
    </main>
  );
}
