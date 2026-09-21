"use client";

import Link from 'next/link';
import { portfolioData } from "@/data/portfolioData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; 
import { motion } from "framer-motion";

export default function FeaturedProjects() {
  const { projects } = portfolioData;

  // Hanya ambil 3 project pertama untuk ditampilkan di halaman ini
  const displayedProjects = projects?.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto text-white overflow-hidden">
      
      {/* 1. HEADER DI TENGAH */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="bg-[#1e1e1e] px-4 py-1 rounded-full text-[10px] text-gray-400 font-medium tracking-wider mb-4 border border-white/5">
          Some of my recent work
        </span>
        <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
        <div className="w-10 h-1 bg-pink-500 rounded-full mt-3"></div>
      </div>

      {/* 2. ZIG-ZAG LAYOUT (Hanya 3 Project) */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-20"
      >
        {displayedProjects?.map((project, index) => {
          const isEven = index % 2 === 0; 

          return (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
            >
              {/* BAGIAN TEKS */}
              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <h3 className="text-3xl lg:text-4xl font-bold text-white">{project.title}</h3>
                <p className="text-green-400 text-sm font-medium">
                  {project.subtitle}
                </p>
                
                {/* Badges Teknologi */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags?.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-[#222222] border border-white/10 text-xs font-medium rounded-full text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Kotak Deskripsi */}
                <div className="bg-[#1a1a1a] border border-white/5 p-5 rounded-xl mt-2">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tombol Ikon Link */}
                <div className="flex items-center gap-4 mt-2">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label={`Open ${project.title} external link`}>
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition" aria-label={`Open ${project.title} GitHub repository`}>
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* BAGIAN GAMBAR */}
              <div className="w-full lg:w-1/2 bg-white rounded-2xl p-4 lg:p-6 shadow-2xl overflow-hidden border-t-4 border-purple-500">
                <div className="w-full aspect-video rounded-xl overflow-hidden bg-gray-100 shadow-sm">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* 3. TOMBOL VIEW ALL PROJECTS (Mengarah ke halaman /projects) */}
      <div className="flex justify-center mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white border border-white/10 px-8 py-3 rounded-xl font-medium transition"
          >
            View All Projects <span className="text-lg">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}