import type { Metadata } from "next";
import Image from "next/image";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { photos } from "@/lib/site";
export const metadata: Metadata = { title: "About Us", description: "About Quality Enterprises, a multi-colour powder coating workshop in Bhosari MIDC, Pune." };
const blocks = [
  ["Company overview", "Quality Enterprises carries out multi-colour powder coating work from its workshop in Bhosari MIDC, Pune. [Edit: add founding year and history once confirmed.]"],
  ["Our commitment to quality", "We aim for even, durable finishes and take care at each step, from preparing the surface to final inspection."],
  ["Our approach to industrial finishing", "We start by understanding the part, the colour and how it will be used, then plan the finish to suit."],
];
export default function About() {
  return (
    <>
      <PageHead kicker="About us" title="A workshop built around the finish" text="Powder coating for metal parts, from Bhosari MIDC, Pune." />
      <section className="wrap grid gap-10 py-16 lg:grid-cols-2">
        <div className="space-y-6">{blocks.map(([t, d], i) => <Reveal key={t} delay={i * 0.08}><h2 className="font-display text-xl font-semibold text-teal">{t}</h2><p className="mt-2 text-slate-300">{d}</p></Reveal>)}</div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative col-span-2 aspect-video overflow-hidden rounded-2xl"><Image src={photos[0].src} alt={photos[0].alt} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" /></div>
          {[photos[1], photos[3]].map(p => <div key={p.src} className="relative aspect-[3/4] overflow-hidden rounded-2xl"><Image src={p.src} alt={p.alt} fill sizes="25vw" className="object-cover" loading="lazy" /></div>)}
        </div>
      </section>
      <CTA />
    </>
  );
}
