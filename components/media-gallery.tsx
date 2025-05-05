"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { FullscreenViewer } from "@/components/fullscreen-viewer";

interface MediaGalleryProps {
  media: string[];
}

export function MediaGallery({ media }: MediaGalleryProps) {
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const isVideo = (url: string) => {
    return (
      url.endsWith(".mp4") || url.endsWith(".webm") || url.endsWith(".mov")
    );
  };

  const handleMediaClick = (index: number) => {
    setActiveIndex(index);
    setIsFullscreenOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {media.map((item, i) => (
          <AnimatedSection
            key={i}
            animation="fade-in"
            delay={i * 100}
            className="hover-lift"
          >
            <div
              className="relative h-64 md:h-72 overflow-hidden rounded-sm cursor-pointer"
              onClick={() => handleMediaClick(i)}
            >
              {isVideo(item) ? (
                <div className="w-full h-full relative">
                  <video
                    src={item}
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    onMouseOver={(e) => e.currentTarget.play()}
                    onMouseOut={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                <Image
                  src={item || "/placeholder.svg"}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>

      {isFullscreenOpen && (
        <FullscreenViewer
          media={media}
          initialIndex={activeIndex}
          onClose={() => setIsFullscreenOpen(false)}
        />
      )}
    </>
  );
}
