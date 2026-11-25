import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Providers from "@/components/Providers";
import { site } from "@/lib/site";
const display = Sora({ subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
export const viewport: Viewport = { themeColor: "#1b2429" };
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Quality Enterprises | Multi-Colour Powder Coating, Pune", template: "%s | Quality Enterprises" },
  description: "Quality Enterprises offers multi-colour powder coating work at Bhosari MIDC, Pune. Durable, high-quality finishes for metal parts.",
  openGraph: { title: "Quality Enterprises | Powder Coating, Pune", description: "Precision in every coat. Multi-colour powder coating in Bhosari MIDC, Pune.", type: "website", images: ["/photos/facility-entrance.jpg"] },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans">
        <Providers><Navbar /><main>{children}</main><Footer /><WhatsAppButton /></Providers>
      </body>
    </html>
  );
}
