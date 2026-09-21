import Link from 'next/link';
import { portfolioData } from '@/data/portfolioData';

export default function ResumePage() {
  const { resume } = portfolioData;

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden flex flex-col">
      
      {/* BACKGROUND VIDEO */}
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
        <div className="absolute inset-0 bg-black/80 z-10"></div>
      </div>

      {/* KONTEN HALAMAN */}
      <div className="relative z-20 flex flex-col min-h-screen">
        
        {/* HEADER SECTION */}
        <div className="w-full relative pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <span className="bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-xs text-gray-300 font-medium mb-6 border border-white/20">
              {resume.title}
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
              {resume.subtitle}
            </h1>

            <div className="w-10 h-1 bg-pink-500 rounded-full mb-8"></div>

            <Link 
              href="/"
              className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm hover:bg-black/60 border border-white/10 px-6 py-2 rounded-full text-sm font-medium transition text-white"
            >
              ← Back to Home
            </Link>
          </div>
        </div>

        {/* LAYOUT 2 KOLOM */}
        <div className="flex-1 max-w-7xl mx-auto px-4 pb-24">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            
            {/* KIRI: Preview CV (SEKARANG MENGGUNAKAN IFRAME UNTUK PDF) */}
            <div className="w-full lg:w-[40%] flex flex-col items-center">
              <div className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-2 shadow-2xl overflow-hidden h-[600px]">
                <iframe 
                  src={resume.previewImage} // Ini akan memuat file PDF Anda
                  className="w-full h-full rounded-xl"
                  title="CV Preview"
                />
              </div>
              <p className="text-xs text-gray-400 mt-4 text-center">Preview CV</p>
            </div>

            {/* KANAN: Daftar Opsi Download */}
            <div className="w-full lg:w-[60%] flex flex-col gap-6">
              {resume.options.map((option) => (
                <div 
                  key={option.id} 
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition duration-300 shadow-lg"
                >
                  {/* Header Opsi */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 text-xl shrink-0">
                      {option.type === 'summary' ? '📝' : option.type === 'detailed' ? '📄' : '🎓'}
                    </div>
                    <h3 className="text-xl font-bold text-white">{option.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {option.description}
                  </p>

                  {/* TOMBOL DOWNLOAD */}
                  <div className="flex flex-wrap gap-3">
                    {option.buttons.map((btn, idx) => (
                      <a 
                        key={idx}
                        href={btn.link}
                        download
                        className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-sm font-medium text-white transition hover:-translate-y-0.5"
                      >
                        <span className="text-base">{btn.icon}</span>
                        {btn.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="bg-black/40 backdrop-blur-sm border-t border-white/10 py-12 px-4 relative z-20">
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
                  <li><Link href="/" className="hover:text-orange-500 transition">About</Link></li>
                  <li><Link href="/projects" className="hover:text-orange-500 transition">Project</Link></li>
                  <li><Link href="/#blog" className="hover:text-orange-500 transition">Blog</Link></li>
                  <li><Link href="/resume" className="hover:text-orange-500 transition">Resume</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4 text-sm drop-shadow-md">Link</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><a href="https://github.com/Salmanars" target="_blank" className="hover:text-orange-500 transition">Github</a></li>
                  <li><a href="https://www.linkedin.com/in/salman-arya-sandytia-918283281" target="_blank" className="hover:text-orange-500 transition">LinkedIn</a></li>
                  <li><a href="https://instagram.com/salmanars" target="_blank" className="hover:text-orange-500 transition">Instagram</a></li>
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