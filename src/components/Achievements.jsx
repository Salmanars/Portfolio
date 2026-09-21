import { portfolioData } from "@/data/portfolioData";
import { FaTrophy } from "react-icons/fa";

export default function Achievements() {
  const data = portfolioData.achievements[0]; 
  const { certificates } = portfolioData;

  return (
    <section id="achievements" className="py-20 px-4 max-w-6xl mx-auto text-white">
      
      <div className="flex flex-col items-center text-center mb-16">
        <span className="bg-[#1e1e1e] px-4 py-1 rounded-full text-[10px] text-gray-400 font-medium tracking-wider mb-4 border border-white/5">
          Recognition & Accomplishments
        </span>
        <h2 className="text-3xl md:text-4xl font-bold">Awards & Achievements</h2>
        <div className="w-10 h-1 bg-pink-500 rounded-full mt-3"></div>
      </div>

      {/* Kartu Universitas */}
      <div className="bg-[#151515] border border-white/5 rounded-2xl p-8 md:p-10 flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16">
        
        {/* KIRI: Logo & Info Universitas (Diperbaiki agar Center & Sejajar) */}
        <div className="w-full lg:w-[35%] flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8">
          
          {/* PERBESAR UKURAN LOGO JADI w-36 DAN HAPUS BACKGROUND KOTAK */}
          <div className="w-36 h-36 mb-4 shrink-0 flex items-center justify-center">
            <img 
              src="/OIP-removebg-preview.png" 
              alt="Logo Undip" 
              className="w-full h-full object-contain drop-shadow-md" 
            />
          </div>
          
          {/* Teks di tengah (Center aligned) */}
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-white leading-tight">
            {data.university.name}
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mt-2 text-sm">
            <span className="text-purple-400 font-semibold">{data.university.period}</span>
            <span className="text-gray-400">{data.university.gpa}</span>
          </div>
        </div>

        {/* KANAN: Daftar Pencapaian */}
        <div className="w-full lg:w-[65%] flex flex-col justify-center space-y-5">
          {data.university.items.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="mt-1 text-yellow-500 shrink-0 bg-[#2a2a2a] p-1.5 rounded-full">
                <FaTrophy className="w-4 h-4" />
              </div>
              <div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Proud Moment Foto */}
      <div className="bg-[#151515] border border-white/5 rounded-2xl p-8 flex flex-col items-center mb-16">
        <p className="text-gray-400 text-sm mb-6 font-medium">{data.proudMoment.title}</p>
        
        <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl border border-white/5">
          <img 
            src={data.proudMoment.imageUrl} 
            alt="Gemastik Moment" 
            className="w-full h-auto object-cover"
          />
        </div>
        
        <p className="text-gray-300 text-sm mt-6 font-medium">{data.proudMoment.caption}</p>
      </div>

      {/* Sertifikat */}
      <div className="mt-16">
        <h3 className="text-lg font-semibold text-center mb-8 text-gray-300">Extracurricular Certificates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {certificates?.map((cert, index) => (
            <div key={index} className="bg-[#151515] border border-white/5 rounded-xl p-6 flex flex-col items-center text-center gap-4 hover:border-purple-500/30 transition duration-300">
              <div className="w-12 h-12 bg-[#222222] rounded-xl flex items-center justify-center text-gray-400 text-2xl">
                📄
              </div>
              <h4 className="text-sm font-semibold text-white">{cert.title}</h4>
              <div className="w-full space-y-1 text-xs text-gray-400">
                <p>{cert.issuer}</p>
                <p>{cert.date}</p>
                <p className="break-all text-gray-500">ID: {cert.certId}</p>
              </div>
              {cert.pdfPath ? (
                <a
                  href={cert.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-2 bg-[#222222] hover:bg-[#2a2a2a] text-gray-300 text-xs py-2 rounded-full transition border border-white/5"
                >
                  Verify
                </a>
              ) : (
                <span className="w-full mt-2 bg-[#1b1b1b] text-gray-600 text-xs py-2 rounded-full border border-white/5 cursor-not-allowed">
                  Verify
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}