import Link from 'next/link';
import { portfolioData } from '@/data/portfolioData';
import { getDictionary } from '@/lib/dictionary';

export default async function ProjectsPage({ dictionary, language = "en" }) {
  dictionary = dictionary || await getDictionary(language);
  const { projects } = portfolioData;
  const content = dictionary?.projectsPage || {};
  const projectContent = dictionary?.projects?.items || {};

  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent text-white">
      <div className="relative z-10 flex min-h-screen flex-col">
        
        {/* HEADER & GRID PROJECTS */}
        <div className="max-w-6xl mx-auto px-4 pt-24 pb-20 flex-grow">
          
          {/* HEADER HALAMAN */}
          <div className="flex flex-col items-center text-center mb-12">
            <span className="bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-[10px] text-gray-300 font-medium tracking-wider mb-4 border border-white/20">
              {content.eyebrow}
            </span>
            <h1 className="text-4xl font-bold mb-6 drop-shadow-md">{content.title}</h1>
            <div className="w-10 h-1 bg-pink-500 rounded-full mb-8"></div>
            
            <Link 
              href={`/${language}`} 
              className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm hover:bg-black/60 border border-white/10 px-6 py-2 rounded-full text-sm font-medium transition text-white"
            >
              {content.backHome}
            </Link>
          </div>

          {/* GRID PROJECT (3 Kolom) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects?.map((project, index) => {
              const localizedProject = projectContent[project.title] || {};

              return (
              <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden flex flex-col hover:border-purple-400/50 transition duration-300 h-full shadow-lg">
                
                {/* Bagian Gambar */}
                <div className="aspect-video bg-black/30 overflow-hidden border-b border-white/10">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                {/* Konten Kartu */}
                <div className="p-5 flex flex-col flex-grow">
                  
                  {/* Tags Teknologi */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags?.map((tag, i) => (
                      <span key={i} className="bg-purple-900/50 text-purple-300 border border-purple-800/50 text-[10px] font-medium px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Judul */}
                  <h3 className="text-lg font-bold mb-2 text-white drop-shadow-sm">{project.title}</h3>
                  
                  {/* Deskripsi */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                    {localizedProject.description || project.description}
                  </p>

                  <div className="mt-auto pt-3 border-t border-white/10 flex items-center">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm font-medium transition"
                      >
                        {content.liveDemo} →
                      </a>
                    )}
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================== */}
        {/* FOOTER */}
        {/* ========================================================== */}
        <div className="bg-black/40 backdrop-blur-sm border-t border-white/10 py-12 px-4 relative z-20">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">
            
            {/* Kiri: Bio & Foto */}
            <div className="flex flex-col items-start gap-4 max-w-xs">
              <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10 bg-white/10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <img 
                  src="/Profile.jpeg" 
                  alt={content.profileAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-white font-medium text-lg leading-tight drop-shadow-md">
                {dictionary?.footer?.description}
              </p>
            </div>

            {/* Tengah: Navigation & Links */}
            <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-3 gap-10">
              <div>
                <h4 className="font-semibold text-white mb-4 text-sm drop-shadow-md">{content.navigation}</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><Link href={`/${language}#about`} className="hover:text-orange-500 hover:translate-x-1 transition-all duration-300 inline-block">{dictionary?.footer?.links?.about}</Link></li>
                  <li><Link href={`/${language}/projects`} className="hover:text-orange-500 hover:translate-x-1 transition-all duration-300 inline-block">{content.project}</Link></li>
                  <li><Link href={`/${language}/blog`} className="hover:text-orange-500 hover:translate-x-1 transition-all duration-300 inline-block">{dictionary?.footer?.links?.blog}</Link></li>
                  <li><Link href={`/${language}/contact`} className="hover:text-orange-500 hover:translate-x-1 transition-all duration-300 inline-block">{content.contact}</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4 text-sm drop-shadow-md">{dictionary?.footer?.link}</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><a href="https://github.com/salman-arya" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 hover:translate-x-1 transition-all duration-300 inline-block">{content.socials.github}</a></li>
                  <li><a href="https://linkedin.com/in/salman-arya-sandytia" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 hover:translate-x-1 transition-all duration-300 inline-block">{content.socials.linkedin}</a></li>
                  <li><a href="https://instagram.com/salman_arya" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 hover:translate-x-1 transition-all duration-300 inline-block">{content.socials.instagram}</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4 text-sm drop-shadow-md">{content.updatesTitle}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{content.updatesDescription}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}