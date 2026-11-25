import type { Metadata } from "next";
import { Layers, Palette, ShieldCheck } from "lucide-react";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { services } from "@/lib/site";
export const metadata: Metadata = { title: "Services", description: "Multi-colour powder coating, industrial metal surface finishing and protective and decorative coating in Pune." };
const icons = [Palette, Layers, ShieldCheck];
export default function Services() {
  return (
    <>
      <PageHead kicker="Services" title="What we do" text="Descriptions below are editable in lib/site.ts and should be checked against your actual offerings." />
      <section className="wrap grid gap-6 py-16 md:grid-cols-3">
        {services.map((s, i) => { const I = icons[i]; return (
          <Reveal key={s.id} delay={i * 0.1}><article className="card h-full"><div className="grid h-12 w-12 place-items-center rounded-xl bg-teal/20"><I className="text-teal" /></div>
            <h2 className="mt-5 font-display text-xl font-semibold">{s.title}</h2><p className="mt-3 text-slate-300">{s.text}</p></article></Reveal>); })}
      </section>
      <CTA />
    </>
  );
}
