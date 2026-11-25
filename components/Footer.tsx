import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="wrap grid gap-8 py-12 md:grid-cols-3">
        <div><Image src="/logo.png" alt="Quality Enterprises logo" width={90} height={63} className="h-12 w-auto" />
          <p className="mt-3 text-sm text-slate-300">Multi-colour powder coating work, Bhosari MIDC, Pune.</p></div>
        <ul className="space-y-2 text-sm text-slate-300">
          {[["Home", "/"], ["About Us", "/about"], ["Services", "/services"], ["Work / Products", "/work"], ["Gallery", "/gallery"], ["Contact Us", "/contact"]].map(([l, h]) => <li key={h}><Link className="hover:text-teal" href={h}>{l}</Link></li>)}
        </ul>
        <address className="space-y-2 text-sm not-italic text-slate-300">
          <p className="flex gap-2"><MapPin size={16} className="mt-1 shrink-0 text-teal" /><a className="hover:text-teal" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">{site.address}</a></p>
          <p className="flex gap-2"><Mail size={16} className="mt-1 text-teal" /><a className="break-all hover:text-teal" href={`mailto:${site.email}`}>{site.email}</a></p>
          {site.contacts.map(c => <p key={c.phone} className="flex gap-2"><Phone size={16} className="mt-1 text-teal" /><a className="hover:text-teal" href={`tel:+91${c.phone}`}>{c.name}: {c.phone}</a></p>)}
        </address>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs text-slate-400">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </footer>
  );
}
