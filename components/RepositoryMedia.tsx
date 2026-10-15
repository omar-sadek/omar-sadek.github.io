"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Repository } from "@/lib/data";

type Props = {
  item: Repository;
};

/**
 * Looping clip for repository cards. Autoplay is muted and inline, and the
 * clip is held on its poster frame when the viewer asks for reduced motion —
 * a looping animation they cannot pause is exactly what that setting is for.
 */
export function RepositoryMedia({ item }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = (matches: boolean) => {
      setReduced(matches);
      const el = videoRef.current;
      if (!el) return;
      if (matches) el.pause();
      else void el.play().catch(() => {});
    };

    apply(motionQuery.matches);
    const onChange = (e: MediaQueryListEvent) => apply(e.matches);
    motionQuery.addEventListener("change", onChange);
    return () => motionQuery.removeEventListener("change", onChange);
  }, []);

  if (!item.video) {
    return (
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className="object-cover transition-transform duration-200 group-hover:scale-[1.03]"
      />
    );
  }

  return (
    <video
      ref={videoRef}
      poster={item.image}
      autoPlay={!reduced}
      loop
      muted
      playsInline
      preload="metadata"
      aria-label={`${item.title} preview`}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.03]"
    >
      {item.video.webm ? (
        <source src={item.video.webm} type="video/webm" />
      ) : null}
      <source src={item.video.src} type="video/mp4" />
    </video>
  );
}
