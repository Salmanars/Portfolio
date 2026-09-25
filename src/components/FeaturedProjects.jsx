"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { portfolioData } from "@/data/portfolioData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; 
import { motion } from "framer-motion";

export default function FeaturedProjects({ dictionary }) {
  const { projects } = portfolioData;
  const content = dictionary?.projects || {};
  const pathLanguage = usePathname().split('/')[1];
  const projectsHref = ['en', 'id'].includes(pathLanguage) ? `/${pathLanguage}/projects` : '/projects';
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { key: 'all', label: content.filters?.all || 'All' },
    { key: 'web', label: content.filters?.web || 'Web Development' },
    { key: 'vr', label: content.filters?.vr || 'VR & 3D' }
  ];
  const categoryTags = {
    web: ['Next.js', 'React.js', 'Node.js', 'Express.js'],
    vr: ['Unity 3D', 'Virtual Reality', '3D Interaction']
  };

  const filteredProjects = projects?.filter((project) => {
    if (activeCategory === 'all') return true;

    return project.tags?.some((tag) => categoryTags[activeCategory].includes(tag));
  });

  // Hanya ambil 3 project pertama untuk ditampilkan di halaman ini
  const displayedProjects = filteredProjects?.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto text-white overflow-hidden">
      
      {/* 1. HEADER DI TENGAH */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="bg-[#1e1e1e] px-4 py-1 rounded-full text-[10px] text-gray-400 font-medium tracking-wider mb-4 border border-white/5">
          {content.eyebrow || 'Some of my recent work'}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold">{content.title || 'Featured Projects'}</h2>
        <div className="w-10 h-1 bg-pink-500 rounded-full mt-3"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-16" role="group" aria-label="Filter project categories">
        {categories.map((category) => (
          <button
            key={category.key}
            type="button"
            onClick={() => setActiveCategory(category.key)}
            aria-pressed={activeCategory === category.key}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
              activeCategory === category.key
                ? 'border-pink-400 bg-pink-500/20 text-pink-300'
                : 'border-white/10 bg-[#1a1a1a] text-gray-400 hover:border-white/30 hover:text-white'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* 2. RESPONSIVE PROJECT GRID */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6"
      >
        {displayedProjects?.map((project, index) => {
          const localizedProject = content.items?.[project.title] || {};

          return (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex h-full flex-col gap-6"
            >
              {/* BAGIAN TEKS */}
              <div className="flex w-full flex-1 flex-col gap-4">
                <h3 className="text-2xl font-bold text-white lg:text-3xl">{project.title}</h3>
                <p className="text-green-400 text-sm font-medium">
                  {localizedProject.subtitle || project.subtitle}
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
                    {localizedProject.description || project.description}
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
              <div className="order-first w-full bg-white rounded-2xl p-4 shadow-2xl overflow-hidden border-t-4 border-purple-500 sm:p-5">
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

      {displayedProjects?.length === 0 && (
        <p className="text-center text-gray-400">{content.noResults || 'No projects found in this category.'}</p>
      )}

      {/* 3. TOMBOL VIEW ALL PROJECTS (Mengarah ke halaman /projects) */}
      <div className="flex justify-center mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            href={projectsHref}
            className="inline-flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white border border-white/10 px-8 py-3 rounded-xl font-medium transition"
          >
            {content.viewAll || 'View All Projects'} <span className="text-lg">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}