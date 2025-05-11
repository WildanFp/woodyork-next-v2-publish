"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface FullscreenViewerProps {
  media: string[];
  initialIndex: number;
  onClose: () => void;
}

export function FullscreenViewer({
  media,
  initialIndex,
  onClose,
}: FullscreenViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isLoading, setIsLoading] = useState(true);

  const isVideo = (url: string) => {
    return (
      url.endsWith(".mp4") || url.endsWith(".webm") || url.endsWith(".mov")
    );
  };

  const handleNext = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  }, [media.length]);

  const handlePrev = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  }, [media.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, handleNext, handlePrev]);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
        aria-label="Close fullscreen view"
      >
        <X size={24} />
      </button>

      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Media container */}
      <div className="w-full h-full flex items-center justify-center p-4 md:p-10">
        {isVideo(media[currentIndex]) ? (
          <video
            src={media[currentIndex]}
            className="max-h-full max-w-full object-contain"
            controls
            autoPlay
            onLoadStart={() => setIsLoading(false)}
          />
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={media[currentIndex] || "/placeholder.svg"}
              alt={`Fullscreen image ${currentIndex + 1}`}
              fill
              className="object-contain"
              onLoad={() => setIsLoading(false)}
            />
          </div>
        )}
      </div>

      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-amber-300 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Thumbnails */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 overflow-x-auto px-4">
        {media.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setIsLoading(true);
              setCurrentIndex(index);
            }}
            className={`w-16 h-16 flex-shrink-0 overflow-hidden rounded-sm border-2 transition-all ${
              currentIndex === index ? "border-amber-300" : "border-transparent"
            }`}
          >
            {isVideo(item) ? (
              <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={item || "/placeholder.svg"}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
