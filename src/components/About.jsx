import Link from 'next/link';
import { portfolioData } from "@/data/portfolioData";

export default function About({ dictionary, language = "en" }) {
  const { about } = portfolioData;
  const content = dictionary?.about || {};
  const description = content.description || about.longBio;

  return (
    <section id="about" className="py-20 px-4 max-w-5xl mx-auto text-white antialiased">
      
      {/* 1. HEADER DI TENGAH */}
      <div className="flex flex-col items-center text-center mb-12">
        <span className="bg-[#1e1e1e] px-4 py-1 rounded-full text-[10px] text-gray-400 font-medium tracking-wider mb-4 border border-white/5">
          {content.eyebrow || "My personal story"}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold">{content.title || "About Me"}</h2>
        <div className="w-10 h-1 bg-pink-500 rounded-full mt-3"></div>
      </div>

      {/* 2. LAYOUT UTAMA (FOTO KIRI - TEKS KANAN) */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
        
        {/* KIRI: Foto Profil Besar */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
          <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-[#1a1a1a] bg-[#1a1a1a] shrink-0">
            <img
              src="/Profile.jpeg" 
              alt="Profile"
              className="w-full h-full object-cover object-top" // object-top menjaga wajah tidak terpotong
            />
          </div>
        </div>

        {/* KANAN: Teks Panjang & Kartu Info */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          
          {/* Teks Paragraf Panjang */}
          <div className="text-gray-300 text-sm leading-7">
            <p>{description}</p>
          </div>

          {/* Kartu Info Data Diri */}
          <div className="bg-[#151515] border border-white/5 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
            
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{content.labels?.name || "Name"}</p>
              <p className="text-white font-medium">{about.name || "Salman Arya Sandytia"}</p>
            </div>
            
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{content.labels?.email || "Email"}</p>
              <p className="text-white font-medium">{about.email || "aryasandytia26@gmail.com"}</p>
            </div>
            
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{content.labels?.location || "Location"}</p>
              <p className="text-white font-medium">{about.location || "Semarang, Jawa Tengah, Indonesia"}</p>
            </div>
            
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{content.labels?.availability || "Availability"}</p>
              <p className="text-white font-medium">{content.availability || about.availability || "Open to Internship"}</p>
            </div>

            {/* PERBAIKAN: Tombol Download Resume (Mengarah ke /resume) */}
            <div className="md:col-span-2 mt-2">
              <Link 
                href={`/${language}/resume`}
                className="w-full bg-[#222222] hover:bg-[#2a2a2a] text-white text-sm font-medium py-3 rounded-xl border border-white/5 transition flex justify-center items-center gap-2 cursor-pointer"
              >
                {content.downloadResume || "Download Resume"} 📥
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
