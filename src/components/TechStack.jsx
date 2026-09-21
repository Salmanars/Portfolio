"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

const categoryData = [
  {
    number: "01",
    label: "Frontend Engineering",
    shortLabel: "FRONTEND ENGINEERING",
    skills: [
      { name: "Next.js", percentage: 90, icon: "next" },
      { name: "React", percentage: 88, icon: "react" },
      { name: "Laravel", percentage: 78, icon: "next" },
      { name: "TypeScript", percentage: 85, icon: "ts" },
      { name: "JavaScript", percentage: 85, icon: "js" },
      { name: "Tailwind CSS", percentage: 88, icon: "tailwind" },
      { name: "HTML", percentage: 88, icon: "html" },
      { name: "CSS", percentage: 82, icon: "css" }
    ]
  },
  {
    number: "02",
    label: "Backend & API Engineering",
    shortLabel: "BACKEND & API ENGINEERING",
    skills: [
      { name: "NestJS", percentage: 75, icon: "node" },
      { name: "Laravel", percentage: 78, icon: "next" },
      { name: "PHP", percentage: 76, icon: "node" },
      { name: "Flask", percentage: 70, icon: "python" },
      { name: "Node.js", percentage: 85, icon: "node" },
      { name: "Express.js", percentage: 85, icon: "express" },
      { name: "REST API", percentage: 78, icon: "postman" },
      { name: "Postman", percentage: 85, icon: "postman" },
      { name: "GraphQL", percentage: 68, icon: "node" },
      { name: "WebSockets", percentage: 68, icon: "node" },
      { name: "Swagger", percentage: 70, icon: "postman" }
    ]
  },
  {
    number: "03",
    label: "Security & Penetration Testing",
    shortLabel: "SECURITY & PENETRATION TESTING",
    skills: [
      { name: "SHA-256 Hashing", percentage: 82, icon: "security" },
      { name: "Access Control", percentage: 80, icon: "security" },
      { name: "Web Security Testing", percentage: 70, icon: "security" }
    ]
  },
  {
    number: "04",
    label: "Database & Relational Systems",
    shortLabel: "DATABASE & RELATIONAL SYSTEMS",
    skills: [
      { name: "MySQL", percentage: 80, icon: "mysql" },
      { name: "Database Design", percentage: 78, icon: "database" },
      { name: "Relational Queries", percentage: 76, icon: "mysql" }
    ]
  },
  {
    number: "05",
    label: "Mobile Development",
    shortLabel: "MOBILE DEVELOPMENT",
    skills: [
      { name: "Kotlin", percentage: 70, icon: "node" },
      { name: "Flutter", percentage: 70, icon: "react" },
      { name: "React Native", percentage: 75, icon: "react" }
    ]
  },
  {
    number: "06",
    label: "3D Development & Virtual Reality",
    shortLabel: "3D DEVELOPMENT & VIRTUAL REALITY",
    skills: [
      { name: "Unity 3D", percentage: 75, icon: "unity" },
      { name: "C#", percentage: 75, icon: "csharp" },
      { name: "VR Interaction", percentage: 72, icon: "unity" }
    ]
  },
  {
    number: "07",
    label: "UI/UX Design & Prototyping",
    shortLabel: "UI/UX DESIGN & PROTOTYPING",
    skills: [
      { name: "Figma", percentage: 78, icon: "figma" },
      { name: "Wireframing", percentage: 80, icon: "figma" },
      { name: "Prototyping", percentage: 76, icon: "figma" }
    ]
  },
  {
    number: "08",
    label: "Computer Networks & IoT",
    shortLabel: "COMPUTER NETWORKS & IOT",
    skills: [
      { name: "Network Fundamentals", percentage: 78, icon: "network" },
      { name: "Cisco Networking", percentage: 75, icon: "network" },
      { name: "IoT Systems", percentage: 70, icon: "arduino" }
    ]
  },
  {
    number: "09",
    label: "Data Analysis & Programming Languages",
    shortLabel: "DATA ANALYSIS & PROGRAMMING",
    skills: [
      { name: "Python", percentage: 70, icon: "python" },
      { name: "Data Analysis", percentage: 68, icon: "python" },
      { name: "Programming Logic", percentage: 78, icon: "python" }
    ]
  }
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState(0);
  const activeData = categoryData[activeCategory];
  const totalSkills = categoryData.reduce((total, category) => total + category.skills.length, 0);

  return (
    <section id="techstack" className="py-20 px-4 max-w-6xl mx-auto text-white overflow-hidden">
      <div className="flex flex-col items-center text-center mb-12">
        <span className="bg-[#1e1e1e] px-4 py-1 rounded-full text-[10px] text-gray-400 font-medium tracking-wider mb-4 border border-white/5">
          [05 // CAPABILITIES] &nbsp;•&nbsp; 9 Categories &nbsp;•&nbsp; {totalSkills} Technical Skills
        </span>
        <h2 className="text-3xl md:text-4xl font-bold">Technical Stack</h2>
        <div className="w-10 h-1 bg-pink-500 rounded-full mt-3"></div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
        <nav className="border-l border-white/10" aria-label="Technical skill categories">
          {categoryData.map((category, index) => (
            <button
              key={category.number}
              type="button"
              onClick={() => setActiveCategory(index)}
              aria-pressed={activeCategory === index}
              className={`group flex w-full items-center justify-between border-b border-white/10 px-4 py-4 text-left transition ${
                activeCategory === index
                  ? "border-l-2 border-l-pink-500 bg-[#1a1a1a] text-white"
                  : "border-l-2 border-l-transparent text-gray-500 hover:bg-[#151515] hover:text-gray-200"
              }`}
            >
              <span className="flex items-center gap-3">
                <span className="font-mono text-xs text-pink-400">[{category.number}]</span>
                <span className="text-xs font-semibold uppercase tracking-wide">{category.label}</span>
              </span>
              <span className="text-xs text-gray-500">({category.skills.length})</span>
            </button>
          ))}
        </nav>

        <div className="min-w-0 rounded-2xl border border-white/10 bg-[#111111] p-6 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeData.number}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <div className="mb-8 flex flex-wrap items-end justify-between gap-3 border-b border-white/10 pb-5">
                <div>
                  <p className="mb-2 font-mono text-xs text-pink-400">[{activeData.number} // {activeData.shortLabel}]</p>
                  <h3 className="text-2xl font-bold md:text-3xl">{activeData.label}</h3>
                </div>
                <span className="font-mono text-xs text-gray-500">• {activeData.skills.length} CAPABILITIES</span>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {activeData.skills.map((skill) => (
                  <div key={skill.name} className="rounded-xl border border-white/10 bg-[#181818] p-5">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#242424]">
                        {iconMap[skill.icon] || "⚙️"}
                      </div>
                      <span className="text-sm font-semibold text-gray-200">{skill.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#303030]">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.percentage}%` }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                        />
                      </div>
                      <span className="w-9 shrink-0 text-right font-mono text-xs font-bold text-pink-400">{skill.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}