"use client";

import Link from 'next/link';
import { portfolioData } from '@/data/portfolioData';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaArrowRight } from "react-icons/fa";

// Ikon dengan warna putih untuk kartu hitam
const iconMap = {
  linkedin: <FaLinkedin className="w-6 h-6 text-white" />,
  github: <FaGithub className="w-6 h-6 text-white" />,
  instagram: <FaInstagram className="w-6 h-6 text-white" />,
  email: <FaEnvelope className="w-6 h-6 text-white" />
};

export default function ContactPage() {
  const { contact } = portfolioData;

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      
      {/* ==================================================== */}
      {/* VIDEO BACKGROUND FULL PAGE (last.mp4) */}
      {/* ==================================================== */}
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
        {/* OVERLAY GELAP YANG SANGAT TEBAL agar teks putih terbaca jelas */}
        <div className="absolute inset-0 bg-black/80 z-10"></div>
      </div>

      {/* ==================================================== */}
      {/* KONTEN HALAMAN (Di atas video) */}
      {/* ==================================================== */}
      <div className="relative z-20 flex flex-col min-h-screen">
        
        {/* 1. HEADER SECTION (Font diubah menjadi sans-serif tebal) */}
        <div className="w-full relative pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <span className="bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-xs text-gray-300 font-medium mb-6 border border-white/20 inline-flex items-center gap-2 group cursor-default">
              Contact <span className="text-gray-400 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
            
            {/* Diubah dari font-serif ke font-bold agar lebih modern */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
              {contact.title}
            </h1>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto drop-shadow-md">
              {contact.subtitle}
            </p>
          </div>
        </div>

        {/* 2. GRID KONTAK 2x2 - DENGAN GLASSMORPHISM (Transparan) */}
        <div className="flex-1 max-w-6xl mx-auto px-4 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6"> {/* Jarak grid diperbesar */}
            {contact.items.map((item, index) => (
              <a 
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block bg-white/5 backdrop-blur-md hover:bg-white/10 rounded-[24px] p-8 border border-white/10 hover:border-purple-400/40 shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out transform hover:-translate-y-1"
              >
                {/* Efek Cahaya Glow Ungu saat di-hover */}
                <div className="absolute inset-0 rounded-[24px] bg-gradient-to-r from-purple-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/20 group-hover:to-pink-500/10 transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>

                {/* Ikon - DIBERSIHKAN (Tanpa kotak latar belakang hitam) */}
                <div className="mb-5 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  {iconMap[item.icon] || <FaEnvelope className="w-6 h-6 text-white" />}
                </div>
                
                {/* Judul & Tautan */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {item.label}
                </h3>
                <p className="text-sm text-gray-400 font-medium group-hover:text-gray-200 transition-colors duration-300">
                  {item.value}
                </p>

                {/* Icon Panah Interaktif */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <FaArrowRight className="w-4 h-4 text-purple-400" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 3. FOOTER HITAM TRANSPARAN */}
        <div className="bg-black/40 backdrop-blur-sm border-t border-white/10 py-12 px-4">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">
            
            <div className="flex flex-col items-start gap-4 max-w-xs">
              <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10 bg-white/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <img 
                  src="/Profile.jpeg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-white font-medium text-lg leading-tight drop-shadow-md">
                Building <span className="text-orange-500">digital experiences</span> that matter.
              </p>
            </div>

            <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-3 gap-10">
              <div>
                <h4 className="font-semibold text-white mb-4 text-sm drop-shadow-md">Navigation</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><Link href="/" className="hover:text-orange-500 hover:translate-x-1 transition-all duration-300 inline-block">About</Link></li>
                  <li><Link href="/projects" className="hover:text-orange-500 hover:translate-x-1 transition-all duration-300 inline-block">Project</Link></li>
                  <li><Link href="/#blog" className="hover:text-orange-500 hover:translate-x-1 transition-all duration-300 inline-block">Blog</Link></li>
                  <li><Link href="/contact" className="hover:text-orange-500 hover:translate-x-1 transition-all duration-300 inline-block">Contact</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4 text-sm drop-shadow-md">Link</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><a href="https://github.com/Salmanars" target="_blank" className="hover:text-orange-500 hover:translate-x-1 transition-all duration-300 inline-block">Github</a></li>
                  <li><a href="https://www.linkedin.com/in/salman-arya-sandytia-918283281" target="_blank" className="hover:text-orange-500 hover:translate-x-1 transition-all duration-300 inline-block">LinkedIn</a></li>
                  <li><a href="https://instagram.com/salmanars" target="_blank" className="hover:text-orange-500 hover:translate-x-1 transition-all duration-300 inline-block">Instagram</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4 text-sm drop-shadow-md">Never Miss an Update</h4>
                <p className="text-sm text-gray-400 leading-relaxed">Get an email when there's something new.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}