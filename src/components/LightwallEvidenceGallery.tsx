import ImageLightbox from "@/components/ImageLightbox";

type EvidenceItem = {
  src: string;
  alt: string;
  caption: string;
};

export default function LightwallEvidenceGallery({ items }: { items: readonly EvidenceItem[] }) {
  return (
    <div className="grid gap-8">
      {items.map((item) => (
        <figure key={item.src} className="overflow-hidden rounded-3xl border border-deep-navy/10 bg-concrete-gray/30 p-3">
          <ImageLightbox
            src={item.src}
            alt={item.alt}
            sizes="(max-width: 1024px) 100vw, 900px"
            wrapperClassName="aspect-[16/9] rounded-2xl bg-white"
            imageClassName="object-contain"
          />
          <figcaption className="mt-3 text-xs leading-relaxed text-deep-navy/60">{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
