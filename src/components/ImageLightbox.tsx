"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";

type ImageLightboxProps = {
  src: string;
  alt: string;
  sizes?: string;
  imageClassName?: string;
  imageStyle?: CSSProperties;
  wrapperClassName?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  native?: boolean;
};

export default function ImageLightbox({
  src,
  alt,
  sizes = "100vw",
  imageClassName = "object-contain",
  imageStyle,
  wrapperClassName = "relative aspect-[4/3]",
  priority = false,
  width,
  height,
  native = false,
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`group relative block w-full cursor-zoom-in overflow-hidden border-0 bg-transparent p-0 text-left focus:outline-none focus:ring-2 focus:ring-active-orange focus:ring-offset-2 ${wrapperClassName}`}
        aria-label={`Ampliar: ${alt}`}
      >
        {native ? (
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            style={imageStyle}
            className={`${imageClassName} transition-transform duration-500 group-hover:scale-[1.02]`}
          />
        ) : width && height ? (
          <Image src={src} alt={alt} width={width} height={height} priority={priority} style={imageStyle} className={`${imageClassName} transition-transform duration-500 group-hover:scale-[1.02]`} />
        ) : (
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={imageStyle} className={`${imageClassName} transition-transform duration-500 group-hover:scale-[1.02]`} />
        )}
        <span className="absolute bottom-3 right-3 rounded-full bg-deep-navy/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          Ampliar
        </span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-deep-navy/90 p-4 backdrop-blur-sm md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`Imagem ampliada: ${alt}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <div className="relative flex max-h-full w-full max-w-7xl flex-col rounded-3xl bg-white p-3 shadow-2xl md:p-5">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-deep-navy text-2xl leading-none text-white transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-active-orange"
              aria-label="Fechar imagem ampliada"
            >
              ×
            </button>
            <div className="relative h-[76vh] min-h-[280px] w-full overflow-hidden rounded-2xl bg-concrete-gray/30">
              {native ? (
                <img src={src} alt={alt} className="h-full w-full object-contain" loading="eager" decoding="async" />
              ) : (
                <Image src={src} alt={alt} fill sizes="95vw" className="object-contain" priority />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
