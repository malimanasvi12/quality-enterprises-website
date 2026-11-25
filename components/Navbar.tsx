"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
const links = [["Home", "/"], ["About Us", "/about"], ["Services", "/services"], ["Work / Products", "/work"], ["Gallery", "/gallery"], ["Contact Us", "/contact"]];
export default function Navbar() {
  const path = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const f = () => setSolid(window.scrollY > 20); f(); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  useEffect(() => setOpen(false), [path]);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${solid || open ? "bg-ink/90 shadow-lg backdrop-blur" : "bg-transparent"}`}>
      <nav className="wrap flex h-16 items-center justify-between" aria-label="Main">
        <Link href="/" className="flex items-center gap-3" aria-label="Quality Enterprises home">
          <Image src="/logo.png" alt="" width={48} height={34} priority className="h-8 w-auto" />
          <span className="font-display text-sm font-semibold tracking-wide">Quality Enterprises</span>
        </Link>
        <ul className="hidden gap-6 lg:flex">
          {links.map(([l, h]) => (
            <li key={h}><Link href={h} aria-current={path === h ? "page" : undefined}
              className={`text-sm transition hover:text-teal ${path === h ? "text-white underline decoration-tangerine decoration-2 underline-offset-8" : "text-slate-300"}`}>{l}</Link></li>
          ))}
        </ul>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="wrap overflow-hidden pb-4 lg:hidden">
            {links.map(([l, h]) => <li key={h}><Link href={h} className="block border-b border-white/10 py-3 text-lg">{l}</Link></li>)}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
