"use client";

import { usePathname } from "next/navigation";

export default function RouteBackgroundVideo({ className = "", ...videoProps }) {
  const pathname = usePathname();
  const cleanPath = pathname ? pathname.replace(/\/+$/, "") : "";
  const pathWithoutLocale = cleanPath.replace(/^\/(?:en|id)(?=\/|$)/, "");

  if (!pathWithoutLocale || pathWithoutLocale === "/blog") {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 isolate overflow-hidden">
      <video
        key="/last.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={`fixed inset-0 -z-10 h-full w-full object-cover ${className}`}
        {...videoProps}
      >
        <source src="/last.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 z-0 bg-black/45" aria-hidden="true" />
    </div>
  );
}
