"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false, loading: () => <div className="h-full w-full animate-pulse rounded-3xl bg-white/5" aria-label="Loading 3D scene" /> });
export default function Hero() {
  const [gl, setGl] = useState<boolean | null>(null);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    try { const c = document.createElement("canvas"); setGl(!!(c.getContext("webgl2") || c.getContext("webgl"))); } catch { setGl(false); }
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ink via-deep to-charcoal/40 pt-16">
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-teal/20 blur-3xl" aria-hidden />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-tangerine/15 blur-3xl" aria-hidden />
      <div className="wrap relative grid items-center gap-6 py-10 lg:grid-cols-2 lg:py-16">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-teal">Quality Enterprises · Bhosari MIDC, Pune</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-display text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">Precision in Every Coat.</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-5 max-w-lg text-lg text-slate-300">Premium Multi-Colour Powder Coating Solutions. Durable Finishes. Exceptional Quality.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="mt-8 flex flex-wrap gap-4">
            <Link href="/services" className="btn btn-primary">Explore Our Services <ArrowRight size={16} /></Link>
            <Link href="/contact" className="btn btn-ghost">Contact Us</Link>
          </motion.div>
        </div>
        <div className="order-first h-[320px] sm:h-[420px] lg:order-last lg:h-[540px]">
          {gl === null ? null : gl ? <HeroScene reduced={reduced} /> : (
            <div className="grid h-full place-items-center rounded-3xl bg-gradient-to-br from-teal/30 to-tangerine/20"><Image src="/logo.png" alt="Quality Enterprises" width={240} height={168} priority /></div>
          )}
        </div>
      </div>
    </section>
  );
}
