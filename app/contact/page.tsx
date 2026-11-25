import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHead from "@/components/PageHead";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";
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
          <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Open in Google Maps</a>
          {site.whatsapp && <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary ml-3">WhatsApp us</a>}
        </div>
        <ContactForm />
      </section>
    </>
  );
}
