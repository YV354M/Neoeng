"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageLightbox from "@/components/ImageLightbox";

type CarouselImage = {
  src: string;
  alt: string;
};

type LightwallHeroCarouselProps = {
  images: readonly CarouselImage[];
  advantages: readonly string[];
};

export default function LightwallHeroCarousel({ images, advantages }: LightwallHeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % advantages.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [advantages.length, isPaused]);

  const imageAt = (offset: number) => {
    const currentImageIndex = activeIndex % images.length;
    return images[(currentImageIndex + offset + images.length) % images.length];
  };

  const previous = () => setActiveIndex((current) => (current - 1 + advantages.length) % advantages.length);
  const next = () => setActiveIndex((current) => (current + 1) % advantages.length);
  const previousImage = imageAt(-1);
  const currentImage = imageAt(0);
  const nextImage = imageAt(1);
  const farPreviousImage = imageAt(-2);
  const farNextImage = imageAt(2);

  return (
    <section
      className="overflow-hidden border-b border-deep-navy/10 bg-concrete-gray/35 px-6 py-12 md:px-12 md:py-16"
      aria-label="Galeria de aplicações e vantagens do Lightwall"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-center gap-3 md:gap-4 xl:gap-5">
          <div className="hidden w-[12%] opacity-55 transition-all duration-500 motion-reduce:transition-none xl:block">
            <ImageLightbox
              src={farPreviousImage.src}
              alt={farPreviousImage.alt}
              sizes="12vw"
              wrapperClassName="aspect-[4/3] rounded-2xl bg-white shadow-md"
              imageClassName="object-cover"
            />
          </div>

          <div className="hidden w-[20%] opacity-75 transition-all duration-500 motion-reduce:transition-none md:block xl:w-[17%]">
            <ImageLightbox
              src={previousImage.src}
              alt={previousImage.alt}
              sizes="20vw"
              wrapperClassName="aspect-[4/3] rounded-2xl bg-white shadow-lg"
              imageClassName="object-cover"
            />
          </div>

          <div className="relative z-10 w-full max-w-md transition-all duration-500 motion-reduce:transition-none md:w-[42%] xl:w-[34%]">
            <ImageLightbox
              src={currentImage.src}
              alt={currentImage.alt}
              sizes="(max-width: 768px) 100vw, 36vw"
              wrapperClassName="aspect-[4/3] rounded-3xl bg-white shadow-xl ring-1 ring-deep-navy/10"
              imageClassName="object-cover"
              priority
            />

            <button
              type="button"
              onClick={previous}
              className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-deep-navy/90 text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-active-orange"
              aria-label="Mostrar imagem anterior"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-deep-navy/90 text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-active-orange"
              aria-label="Mostrar próxima imagem"
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden w-[20%] opacity-75 transition-all duration-500 motion-reduce:transition-none md:block xl:w-[17%]">
            <ImageLightbox
              src={nextImage.src}
              alt={nextImage.alt}
              sizes="20vw"
              wrapperClassName="aspect-[4/3] rounded-2xl bg-white shadow-lg"
              imageClassName="object-cover"
            />
          </div>

          <div className="hidden w-[12%] opacity-55 transition-all duration-500 motion-reduce:transition-none xl:block">
            <ImageLightbox
              src={farNextImage.src}
              alt={farNextImage.alt}
              sizes="12vw"
              wrapperClassName="aspect-[4/3] rounded-2xl bg-white shadow-md"
              imageClassName="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto mt-7 max-w-4xl text-center" aria-live="polite" aria-atomic="true">
          <div className="mx-auto h-1 w-12 rounded-full bg-active-orange" aria-hidden="true" />
          <p className="mt-4 min-h-14 text-lg font-black leading-snug text-deep-navy md:text-2xl">
            {advantages[activeIndex]}
          </p>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-deep-navy/45">
            {activeIndex + 1} / {advantages.length} · Clique na imagem para ampliar
          </p>
        </div>

        <p className="mt-7 text-center text-[11px] leading-relaxed text-deep-navy/50">
          Fotos fornecidas pela Lightwall Brasil, obras realizadas por parceiros.
        </p>
      </div>
    </section>
  );
}
