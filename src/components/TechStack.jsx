"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { 
  FaGitAlt, FaJs, FaPython, FaFigma, FaNetworkWired, FaShieldAlt
} from "react-icons/fa";
import { 
  SiNextdotjs, SiReact, SiTypescript, SiNodedotjs, SiTailwindcss, SiMysql, SiUnity, SiExpress, SiDocker, SiPostman, SiMongodb, SiArduino
} from "react-icons/si";

const iconMap = {
  next: <SiNextdotjs className="w-5 h-5 text-white" />,
  react: <SiReact className="w-5 h-5 text-cyan-400" />,
  ts: <SiTypescript className="w-5 h-5 text-blue-500" />,
  js: <FaJs className="w-5 h-5 text-yellow-400" />,
  node: <SiNodedotjs className="w-5 h-5 text-green-500" />,
  express: <SiExpress className="w-5 h-5 text-white" />,
  tailwind: <SiTailwindcss className="w-5 h-5 text-cyan-400" />,
  html: <span className="text-orange-400 font-bold text-sm">&lt;/&gt;</span>,
  css: <span className="text-blue-400 font-bold text-sm">#</span>,
  mysql: <SiMysql className="w-5 h-5 text-blue-400" />,
  database: <SiMongodb className="w-5 h-5 text-green-400" />,
  git: <FaGitAlt className="w-5 h-5 text-orange-500" />,
  docker: <SiDocker className="w-5 h-5 text-blue-400" />,
  postman: <SiPostman className="w-5 h-5 text-orange-400" />,
  unity: <SiUnity className="w-5 h-5 text-white" />,
  csharp: <span className="text-purple-400 font-bold text-sm">C#</span>,
  python: <FaPython className="w-5 h-5 text-blue-300" />,
  figma: <FaFigma className="w-5 h-5 text-pink-400" />,
  network: <FaNetworkWired className="w-5 h-5 text-cyan-400" />,
  security: <FaShieldAlt className="w-5 h-5 text-red-400" />,
  arduino: <SiArduino className="w-5 h-5 text-teal-400" />,
};

export default function TechStack({ dictionary }) {
  const { skillCategories: categoryData } = portfolioData;
  const content = dictionary?.techStack || {};
  const [openCategories, setOpenCategories] = useState(() => new Set([0]));
  const totalSkills = categoryData.reduce((total, category) => total + category.skills.length, 0);

  const toggleCategory = (categoryIndex) => {
    setOpenCategories((currentCategories) => {
      const nextCategories = new Set(currentCategories);

      if (nextCategories.has(categoryIndex)) {
        nextCategories.delete(categoryIndex);
      } else {
        nextCategories.add(categoryIndex);
      }

      return nextCategories;
    });
  };

  return (
    <section id="techstack" className="w-full overflow-hidden bg-[#0a0a0a] px-4 py-8 text-white sm:px-6 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col gap-3 border-b border-neutral-800 pb-6 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-cyan-400">{content.eyebrow || '[05 // CAPABILITIES]'}</p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{content.title || 'Technical Stack'}</h2>
          </div>
          <span className="font-mono text-xs text-neutral-500">{categoryData.length} {content.summary || 'CATEGORIES / SKILLS'} {totalSkills}</span>
        </div>

        <div className="border-t border-neutral-800" aria-label="Technical skill categories">
          {categoryData.map((category, categoryIndex) => {
            const isOpen = openCategories.has(categoryIndex);
            const categoryLabel = content.categoryLabels?.[category.number] || category.label;

            return (
              <div key={category.number} className="border-b border-neutral-800">
                <button
                  type="button"
                  onClick={() => toggleCategory(categoryIndex)}
                  aria-expanded={isOpen}
                  aria-controls={`skills-${category.number}`}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left transition-colors hover:text-cyan-300 sm:py-5"
                >
                  <span className="flex min-w-0 items-center gap-3 sm:gap-5">
                    <span className="shrink-0 font-mono text-sm text-cyan-400">[{category.number}]</span>
                    <span className="truncate text-sm font-semibold uppercase tracking-[0.08em] text-neutral-200 sm:text-base">{categoryLabel}</span>
                  </span>
                  <span className="flex shrink-0 items-center gap-3 font-mono text-xs text-neutral-500">
                    <span>{String(category.skills.length).padStart(2, "0")}</span>
                    <span className="text-xl leading-none text-cyan-400" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`skills-${category.number}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-2 pl-0 sm:pb-3 sm:pl-9">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skill.name} className="flex min-w-0 items-center gap-3 border-b border-neutral-800 py-3 last:border-b-0 sm:gap-4">
                            <span className="w-12 shrink-0 font-mono text-xs text-cyan-400 sm:w-14">{category.number}.{String(skillIndex + 1).padStart(2, "0")}</span>
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center text-cyan-300">
                              {iconMap[skill.icon] || <span className="text-xs text-cyan-300">+</span>}
                            </span>
                            <span className="min-w-0 flex-1 break-words font-mono text-xs text-neutral-300 sm:text-sm">{skill.name}</span>
                            <span className="shrink-0 text-sm text-neutral-500" aria-hidden="true">↗</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}