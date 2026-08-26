import { useState, useEffect } from "react";
import Reveal from "../components/Reveal";
import { gallerySections } from "../data/projects";

export default function Media() {
  const [lightbox, setLightbox] = useState(null);

  // Lightbox open ho to background scroll lock + Esc se close
  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  const renderGallery = (images, title) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6">
      {images.slice(0, 3).map((src, index) => (
        <Reveal key={src} delay={index * 60} className="lg:col-span-2">
          <figure className="group relative overflow-hidden rounded-2xl shadow-pink-sm cursor-pointer h-full" onClick={() => setLightbox(src)}>
            <img src={src} alt={`${title} ${index + 1}`} loading="lazy" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-pink-brand/80 to-transparent text-white text-sm font-medium px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity">{title}</figcaption>
          </figure>
        </Reveal>
      ))}

      {images.slice(3, 5).map((src, index) => (
        <Reveal key={src} delay={(index + 3) * 60} className={index === 0 ? "lg:col-start-2 lg:col-span-2" : "lg:col-span-2"}>
          <figure className="group relative overflow-hidden rounded-2xl shadow-pink-sm cursor-pointer h-full" onClick={() => setLightbox(src)}>
            <img src={src} alt={`${title} ${index + 4}`} loading="lazy" className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-pink-brand/80 to-transparent text-white text-sm font-medium px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity">{title}</figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );

  return (
    <>
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1100px] mx-auto space-y-20">
          {gallerySections.map((sec) => (
            <section key={sec.title}>
              <div className="text-center mb-10">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-pink-brand bg-pink-light rounded-full px-4 py-1.5 mb-4">
                  {sec.tag}
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">{sec.title}</h2>
                <p className="text-ink-soft max-w-xl mx-auto">{sec.desc}</p>
                <div className="h-1 w-16 bg-pink-brand rounded-full mx-auto mt-5"></div>
              </div>

              {renderGallery(sec.images, sec.title)}
            </section>
          ))}
        </div>
      </main>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[2000] bg-black/85 flex items-center justify-center p-5"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-6 text-white text-4xl hover:text-pink-brand"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <img
            src={lightbox}
            alt="Preview"
            className="max-h-[85vh] max-w-full rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
