"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
      style={{
        backgroundImage: "url('/section.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Konten Utama - Dibungkus dengan motion.div untuk animasi */}
      <div className="relative z-20 max-w-4xl flex flex-col items-center">
        
        {/* 1. Badge "Welcome" - Muncul dari atas */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-block px-4 py-1.5 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm text-gray-300 text-[10px] font-medium uppercase tracking-widest shadow-sm"
        >
          Welcome to my Portfolio
        </motion.div>

        {/* 2. Judul "Who Is Me?" - Muncul membesar */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight drop-shadow-md"
        >
          Who <motion.span 
            className="text-pink-400 inline-block"
            animate={{ 
              scale: [1, 1.08, 1],
              rotate: [0, -2, 2, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              repeatType: "loop",
              ease: "easeInOut"
            }}
          >Is</motion.span> Me<span className="text-pink-400">?</span>
        </motion.h1>

        {/* 3. Paragraf - Muncul perlahan dari bawah */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-gray-200 text-sm md:text-base max-w-2xl leading-relaxed drop-shadow-md font-light"
        >
          Hi, I'm a software engineer who builds web applications
          with a focus on clarity, performance, and real-world
          usability. This is a brief introduction, scroll down to see
          my experience, process, and the work behind it.
        </motion.p>

        {/* 4. Tombol Get in touch - Muncul melambung (spring) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, type: "spring", stiffness: 100 }}
          className="mt-8"
        >
          <Link 
            href="/contact"
            className="inline-block px-6 py-2.5 border border-white/30 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium hover:bg-white/20 hover:border-white/50 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg cursor-pointer"
          >
            Get in touch
          </Link>
        </motion.div>

      </div>
    </section>
  );
}