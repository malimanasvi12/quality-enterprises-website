"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryItem } from "@/lib/gallery";
export default function Gallery({ items }: { items: GalleryItem[] }) {
  const cats = ["All", ...Array.from(new Set(items.map(p => p.cat)))];
  const [cat, setCat] = useState("All");
  const [sel, setSel] = useState<number | null>(null);
  const list = items.filter(p => cat === "All" || p.cat === cat);
  const step = useCallback((d: number) => setSel(i => (i === null ? null : (i + d + list.length) % list.length)), [list.length]);
  useEffect(() => {
    if (sel === null) return;
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setSel(null); if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); };
    window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k);
  }, [sel, step]);
  const p = sel === null ? null : list[sel];
  return (
    <>
      {cats.length > 2 && <div className="mb-8 flex flex-wrap gap-3" role="group" aria-label="Filter photos">
        {cats.map(c => <button key={c} onClick={() => { setCat(c); setSel(null); }} aria-pressed={cat === c} className={`rounded-full px-5 py-2 text-sm transition ${cat === c ? "bg-tangerine font-semibold text-ink" : "border border-white/20 hover:border-teal"}`}>{c}</button>)}
      </div>}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((ph, i) => (
          <motion.button key={ph.src} layout onClick={() => setSel(i)} aria-label={`Open: ${ph.caption}`}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-tangerine">
            <Image src={ph.src} alt={ph.alt} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-110" loading="lazy" />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-4 text-left text-sm sm:opacity-0 sm:transition sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">{ph.caption}</span>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {p && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] grid place-items-center bg-black/90 p-4" role="dialog" aria-modal="true" aria-label={p.caption} onClick={() => setSel(null)}>
            <button className="absolute right-4 top-4 z-10 rounded-full bg-white/15 p-2" onClick={() => setSel(null)} aria-label="Close preview"><X /></button>
            {list.length > 1 && <>
              <button className="absolute left-2 z-10 rounded-full bg-white/15 p-2 sm:left-6" onClick={e => { e.stopPropagation(); step(-1); }} aria-label="Previous image"><ChevronLeft /></button>
              <button className="absolute right-2 z-10 rounded-full bg-white/15 p-2 sm:right-6" onClick={e => { e.stopPropagation(); step(1); }} aria-label="Next image"><ChevronRight /></button>
            </>}
            <div className="relative h-[78vh] w-[88vw] max-w-5xl" onClick={e => e.stopPropagation()}><Image src={p.src} alt={p.alt} fill sizes="90vw" className="object-contain" priority /></div>
            <p className="absolute bottom-4 px-4 text-center text-sm text-slate-200">{p.caption} · {(sel ?? 0) + 1}/{list.length}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
