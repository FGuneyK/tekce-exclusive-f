"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/lib/projects";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

/**
 * One large frame with the whole set beneath it, sized to sit beside the
 * enquiry panel rather than to fill the viewport.
 */
export function ProjectGallery({ project }: { project: Project }) {
  const [index, setIndex] = useState(0);
  const photo = project.gallery[index];

  return (
    <div>
      <div className="relative aspect-[4/3] bg-ink sm:aspect-[16/10]">
        <Image
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          fill
          preload
          sizes="(min-width: 1024px) 62vw, 100vw"
          className="object-cover"
        />
        <p className="absolute right-0 bottom-0 bg-paper px-2.5 py-1 text-[12px] tracking-tight text-ink/60 tabular-nums">
          {index + 1} / {project.gallery.length}
        </p>
      </div>

      <ul className="-mx-5 mt-2 flex gap-2 overflow-x-auto px-5 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden">
        {project.gallery.map((item, position) => {
          const current = position === index;
          return (
            <li key={item.src} className="min-w-0 shrink-0 grow basis-0">
              <button
                type="button"
                aria-current={current ? "true" : undefined}
                onClick={() => setIndex(position)}
                className={`relative block aspect-[4/3] w-24 transition-opacity duration-150 sm:w-auto sm:min-w-full ${
                  current ? "opacity-100" : "opacity-55 hover:opacity-100"
                } ${focusRing}`}
              >
                <span className="sr-only">
                  Show image {position + 1} of {project.gallery.length}
                </span>
                <Image
                  src={item.src}
                  alt=""
                  fill
                  sizes="160px"
                  className="object-cover"
                />
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 border-2 transition-colors duration-150 ${
                    current ? "border-ink" : "border-transparent"
                  }`}
                />
              </button>
            </li>
          );
        })}
      </ul>

      <p className="mt-2.5 text-[13px] tracking-tight text-ink/45">
        {project.imagery} supplied by the developer.
      </p>
    </div>
  );
}
