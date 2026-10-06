"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const leftPhotos = [
  "/images/Memories 12.jpg",
  "/images/Memories 11.jpeg",
  "/images/Memories 10.jpeg",
  "/images/Memories 9.jpeg",
  "/images/Memories 8.jpeg"
];

const rightPhotos = [
  "/images/Memories 7.jpeg",
  "/images/Memories 6.jpg",
  "/images/Memories 5.jpeg",
  "/images/Memories 4.jpeg",
  "/images/Memories 3.jpeg"
];

const memories = [...leftPhotos, ...rightPhotos].map((src, index) => {
  const filename = src.split("/").pop().replace(/\.(jpe?g)$/i, "");

  return {
    src,
    filename,
    index
  };
});

function PhotoColumn({ photos, direction, className = "" }) {
  const photosLoop = [...photos, ...photos];

  return (
    <div className={`hidden h-[34rem] overflow-hidden md:block ${className}`} aria-hidden="true">
      <motion.div
        className="flex flex-col gap-5"
        animate={{ y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 42, ease: "linear", repeat: Infinity }}
      >
        {photosLoop.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="relative h-52 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 1280px) 25vw, 320px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function WhoIsMe({ dictionary }) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeMemory, setActiveMemory] = useState(0);
  const content = dictionary?.whoIsMe || {};

  useEffect(() => {
    if (!isGalleryOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsGalleryOpen(false);
      } else if (event.key === "ArrowRight") {
        setActiveMemory((index) => (index + 1) % memories.length);
      } else if (event.key === "ArrowLeft") {
        setActiveMemory((index) => (index - 1 + memories.length) % memories.length);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isGalleryOpen]);

  const showPreviousMemory = () => {
    setActiveMemory((index) => (index - 1 + memories.length) % memories.length);
  };

  const showNextMemory = () => {
    setActiveMemory((index) => (index + 1) % memories.length);
  };

  const activeItem = memories[activeMemory];

  return (
    <section
      id="who-is-me"
      className="relative z-10 px-4 py-16 text-center text-white sm:py-20"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,1fr)_16rem_minmax(0,1fr)] md:gap-6">
        <PhotoColumn photos={leftPhotos} direction="up" />

        <div className="flex flex-col items-center">
          <h2 className="mb-6 font-serif text-4xl tracking-wide text-white/90 sm:text-5xl">
            {content.title}
          </h2>

          <div className="relative h-44 w-44 sm:h-52 sm:w-52">
            <Image
              src="/beruang.png"
              alt={content.bearAlt}
              fill
              sizes="(max-width: 640px) 176px, 208px"
              className="object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.45)]"
            />
          </div>

          <button
            type="button"
            onClick={() => {
              setActiveMemory(0);
              setIsGalleryOpen(true);
            }}
            aria-label={content.openGallery}
            className="mt-5 rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white transition hover:border-purple-300/60 hover:text-purple-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-300"
          >
            {content.openGallery}
          </button>
        </div>

        <PhotoColumn photos={rightPhotos} direction="down" />
      </div>

      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setIsGalleryOpen(false);
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={content.galleryTitle}
              className="relative w-full max-w-4xl rounded-2xl border border-white/15 bg-[#101116] p-4 text-white shadow-2xl sm:p-6"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <div className="text-left">
                  <h3 className="font-serif text-2xl">{content.galleryTitle}</h3>
                  <p className="mt-1 text-xs text-neutral-400">
                    {activeMemory + 1} / {memories.length}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsGalleryOpen(false)}
                  aria-label={content.closeGallery}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-2xl text-neutral-300 transition hover:bg-white/10 hover:text-white"
                >
                  ×
                </button>
              </div>

              <div className="relative flex h-[50vh] min-h-64 max-h-[620px] items-center justify-center overflow-hidden rounded-xl bg-black/40">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.src}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={activeItem.src}
                      alt={`${content.memoryAlt} ${activeItem.filename}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 896px"
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                <button
                  type="button"
                  onClick={showPreviousMemory}
                  aria-label={content.previous}
                  className="absolute left-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-xl text-white backdrop-blur-sm transition hover:bg-black/80"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={showNextMemory}
                  aria-label={content.next}
                  className="absolute right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-xl text-white backdrop-blur-sm transition hover:bg-black/80"
                >
                  ›
                </button>
              </div>

              <p className="mt-4 text-center text-sm text-neutral-300">
                {content.captions?.[activeItem.index] || ""}
              </p>

              <div className="mt-4 flex justify-center gap-2">
                {memories.map((memory, index) => (
                  <button
                    key={memory.src}
                    type="button"
                    onClick={() => setActiveMemory(index)}
                    aria-label={`${content.showMemory} ${index + 1}`}
                    aria-current={activeMemory === index ? "true" : undefined}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      activeMemory === index ? "bg-purple-300" : "bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
