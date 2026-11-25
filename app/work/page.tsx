import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import WhatsAppLink from "@/components/WhatsAppLink";
import Gallery from "@/components/Gallery";
import { getGallery } from "@/lib/gallery";
import { services } from "@/lib/site";
export const metadata: Metadata = { title: "Work / Products", description: "Powder coating work and finishing services from Quality Enterprises, Bhosari MIDC, Pune." };
export default function Work() {
  const { work } = getGallery();
  return (
    <>
      <PageHead kicker="Work / Products" title="What we coat and finish" text="Ask us on WhatsApp about any of the work below." />
      <section className="wrap grid gap-6 py-12 md:grid-cols-3">
        {services.map((s, i) => <Reveal key={s.id} delay={i * 0.08}><article className="card flex h-full flex-col"><h2 className="font-display text-lg font-semibold">{s.title}</h2><p className="mt-2 flex-1 text-sm text-slate-300">{s.text}</p><WhatsAppLink className="mt-5" /></article></Reveal>)}
      </section>
      {work.length > 0 && <section className="wrap pb-16"><h2 className="mb-6 font-display text-2xl font-bold">Recent work</h2><Gallery items={work} />
        <Link href="/gallery" className="btn btn-ghost mt-8">View full gallery</Link></section>}
    </>
  );
}
