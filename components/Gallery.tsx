"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { photos } from "@/lib/site";
const cats = ["All", ...Array.from(new Set(photos.map(p => p.cat)))];
export default function Gallery() {
  const [cat, setCat] = useState("All");
  const [sel, setSel] = useState<number | null>(null);
  const list = photos.filter(p => cat === "All" || p.cat === cat);
  useEffect(() => { const k = (e: KeyboardEvent) => e.key === "Escape" && setSel(null); window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k); }, []);
  const p = sel === null ? null : photos[sel];
  return (
    <>
      <div className="mb-8 flex flex-wrap gap-3" role="group" aria-label="Filter photos">
        {cats.map(c => <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} className={`rounded-full px-5 py-2 text-sm transition ${cat === c ? "bg-tangerine font-semibold text-ink" : "border border-white/20 hover:border-teal"}`}>{c}</button>)}
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {list.map(ph => (
          <button key={ph.src} onClick={() => setSel(photos.indexOf(ph))} className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-tangerine" aria-label={`Open: ${ph.caption}`}>
            <Image src={ph.src} alt={ph.alt} fill sizes="(max-width:1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-4 text-left text-sm opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">{ph.caption}</span>
          </button>
        ))}
      </div>
      <AnimatePresence>
        {p && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] grid place-items-center bg-black/90 p-4" role="dialog" aria-modal="true" aria-label={p.caption} onClick={() => setSel(null)}>
            <button className="absolute right-4 top-4 rounded-full bg-white/10 p-2" onClick={() => setSel(null)} aria-label="Close preview"><X /></button>
            <div className="relative h-[80vh] w-[92vw] max-w-4xl"><Image src={p.src} alt={p.alt} fill sizes="92vw" className="object-contain" /></div>
            <p className="absolute bottom-4 text-sm text-slate-300">{p.caption}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
