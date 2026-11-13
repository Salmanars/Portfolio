"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function FeaturedProjects({ dictionary }) {
  const pathLanguage = usePathname()?.split('/')[1];
  const language = ['en', 'id'].includes(pathLanguage) ? pathLanguage : 'en';
  const projectsHref = `/${language}/projects`;
  const content = dictionary?.projects || {};

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl overflow-hidden px-4 py-20 text-white"
    >
      <div className="flex flex-col items-center text-center">
        <h2 className="font-serif text-4xl font-medium tracking-tight text-white sm:text-5xl">
          {content.title || 'Featured Projects'}
        </h2>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-400 md:text-base">
          {content.featuredDescription ||
            'A curated collection of projects where I turn ideas into scalable, performant, and user-focused digital products. Each project reflects my approach to problem-solving, system design, and real-world implementation.'}
        </p>
        <Link
          href={projectsHref}
          className="mt-8 inline-flex items-center rounded-full border border-white/10 bg-[#1a1a1a] px-6 py-3 text-sm font-medium text-white transition hover:border-pink-400/50 hover:bg-[#222222]"
        >
          {content.viewAll || 'View All Projects'}
        </Link>
      </div>
    </section>
  );
}
