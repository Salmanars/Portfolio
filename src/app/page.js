"use client";

import Hero from '../components/Hero';
import About from '../components/About';
import TechStack from '../components/TechStack';
import FeaturedProjects from '../components/FeaturedProjects';
import Achievements from '../components/Achievements';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      
      <Hero />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-24 relative z-10">
        <About />
        <TechStack />
        <FeaturedProjects />

        {/* ============================================================== */}
        {/* 🚶‍♂️ ANIMASI 4 KARAKTER (Dengan Efek Gerakan & Bayangan) */}
        {/* ============================================================== */}
        <div className="w-full relative h-32 my-4 overflow-hidden">
          
          {/* Wadah Pembungkus Tunggal */}
          <motion.div 
            className="absolute top-2 left-0 flex items-end"
            initial={{ x: "-30vw", scale: 0.8 }} // Mulai dari kiri dan sedikit kecil
            animate={{ 
              x: "130vw",
              y: [0, -15, 0, 15, 0], // Gerakan naik turun (berjalan bergelombang)
              scale: [0.8, 1.1, 0.8] // Membesar saat di tengah, mengecil saat pinggir
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut" // Ganti dari linear ke easeInOut agar gerakan lebih halus
            }}
          >
            {/* FUNGSI BANTUAN: Membungkus karakter dengan bayangan */}
            {[
              { src: "/animasi2.gif", gap: 0 },
              { src: "/animasi4.gif", gap: 120 },
              { src: "/animasi5.gif", gap: 120 },
              { src: "/animasi6.gif", gap: 120 }
            ].map((char, i) => (
              <div key={i} className={`relative ml-[${char.gap}px] flex flex-col items-center`} style={{ marginLeft: i === 0 ? 0 : '120px' }}>
                {/* Bayangan di bawah kaki */}
                <div className="absolute -bottom-2 w-12 h-4 bg-white/20 rounded-full blur-sm z-0"></div>
                {/* Karakter GIF */}
                <img 
                  src={char.src} 
                  alt={`Char ${i+1}`} 
                  className="h-24 w-auto object-contain relative z-10 drop-shadow-xl"
                />
              </div>
            ))}
            
          </motion.div>
          
        </div>
        {/* ============================================================== */}

        <Achievements />
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/last.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/70 z-10"></div>
        </div>
        <div className="relative z-20 px-4 pb-10">
          <div className="max-w-6xl mx-auto">
            <Blog />
          </div>
          <Footer />
        </div>
      </div>

    </main>
  );
}