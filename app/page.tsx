import Image from "next/image";
import Link from "next/link";
import { Layers, Palette, ShieldCheck } from "lucide-react";
import { Mail, MapPin, Phone } from "lucide-react";
import WhatsAppLink from "@/components/WhatsAppLink";
import { getGallery } from "@/lib/gallery";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { callUrl, photos, reasons, services, site } from "@/lib/site";
const icons = [Palette, Layers, ShieldCheck];
export default function Home() {
  const preview = getGallery().all.slice(0, 4);
  return (
    <>
      <Hero />
      <section className="wrap grid items-center gap-10 py-20 md:grid-cols-2">
        <Reveal><h2 className="font-display text-3xl font-bold">About Quality Enterprises</h2>
          <p className="mt-4 text-slate-300">Quality Enterprises is a powder coating workshop in Bhosari MIDC, Pune, specialising in multi-colour powder coating work. We focus on clean, durable finishes for metal parts.</p>
          <Link href="/about" className="btn btn-ghost mt-6">Learn more</Link></Reveal>
        <Reveal delay={0.1}><div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10"><Image src={photos[0].src} alt={photos[0].alt} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" /></div></Reveal>
      </section>
      <section className="bg-ink/60 py-20"><div className="wrap">
        <Reveal><h2 className="font-display text-3xl font-bold">Our Services</h2></Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => { const I = icons[i]; return (
            <Reveal key={s.id} delay={i * 0.1}><div className="card h-full"><I className="text-tangerine" /><h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3><p className="mt-2 text-sm text-slate-300">{s.text}</p><WhatsAppLink className="mt-4" /></div></Reveal>); })}
        </div></div></section>
      <section className="wrap py-20">
        <Reveal><h2 className="font-display text-3xl font-bold">Why Choose Us</h2></Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(([t, d], i) => <Reveal key={t} delay={i * 0.06}><div className="card h-full border-l-4 border-l-teal"><h3 className="font-semibold">{t}</h3><p className="mt-2 text-sm text-slate-300">{d}</p></div></Reveal>)}
        </div></section>
      <section className="bg-ink/60 py-20"><div className="wrap">
        <Reveal><h2 className="font-display text-3xl font-bold">Gallery</h2></Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map(p => <Reveal key={p.src}><Link href="/gallery" aria-label={`View gallery: ${p.caption}`} className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-white/10"><Image src={p.src} alt={p.alt} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-110" loading="lazy" /></Link></Reveal>)}
        </div>
        <Link href="/gallery" className="btn btn-primary mt-8">View All Images</Link></div></section>
      <section className="wrap grid gap-8 py-20 md:grid-cols-2">
        <Reveal><h2 className="font-display text-3xl font-bold">Contact us</h2>
          <address className="mt-4 space-y-3 not-italic text-slate-300">
            <p className="flex gap-3"><MapPin className="shrink-0 text-teal" />{site.address}</p>
            <p className="flex gap-3"><Mail className="shrink-0 text-teal" /><a className="break-all hover:text-teal" href={`mailto:${site.email}`}>{site.email}</a></p>
            <p className="flex gap-3"><Phone className="shrink-0 text-teal" /><a className="hover:text-teal" href={callUrl}>+91 {site.whatsapp.slice(2)}</a></p></address></Reveal>
        <Reveal delay={0.1} className="flex flex-wrap content-center gap-3"><WhatsAppLink label="WhatsApp Enquiry" /><a href={callUrl} className="btn btn-primary">Call Now</a><Link href="/contact" className="btn btn-ghost">Enquiry form</Link></Reveal>
      </section>
    </>
  );
}
