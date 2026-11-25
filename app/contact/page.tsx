import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import WhatsAppLink from "@/components/WhatsAppLink";
import PageHead from "@/components/PageHead";
import ContactForm from "@/components/ContactForm";
import { callUrl, site } from "@/lib/site";
export const metadata: Metadata = { title: "Contact", description: "Contact Quality Enterprises, Bhosari MIDC, Pune, for powder coating enquiries." };
export default function Contact() {
  return (
    <>
      <PageHead kicker="Contact" title="Send us an enquiry" />
      <section className="wrap grid gap-10 py-12 lg:grid-cols-2">
        <div className="space-y-5 text-slate-200">
          <h2 className="font-display text-2xl font-semibold">{site.name}</h2>
          <p className="flex gap-3"><MapPin className="shrink-0 text-teal" />{site.address}</p>
          <p className="flex gap-3"><Mail className="shrink-0 text-teal" /><a className="break-all hover:text-teal" href={`mailto:${site.email}`}>{site.email}</a></p>
          {site.contacts.map(c => <p key={c.phone} className="flex gap-3"><Phone className="shrink-0 text-teal" /><a className="hover:text-teal" href={`tel:+91${c.phone}`}>{c.name}: {c.phone}</a></p>)}
          <div className="flex flex-wrap gap-3">
            <WhatsAppLink label="WhatsApp Enquiry" />
            <a href={callUrl} className="btn btn-primary"><Phone size={16} />Call Now</a>
            <a href={`mailto:${site.email}?subject=Enquiry`} className="btn btn-ghost"><Mail size={16} />Email Enquiry</a>
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Open in Google Maps</a>
          </div>
          <iframe title="Quality Enterprises location on Google Maps" loading="lazy" className="h-64 w-full rounded-2xl border border-white/10"
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`} referrerPolicy="no-referrer-when-downgrade" />
        </div>
        <ContactForm />
      </section>
    </>
  );
}
