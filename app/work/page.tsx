import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Gallery from "@/components/Gallery";
export const metadata: Metadata = { title: "Our Work", description: "Photographs of the Quality Enterprises workshop in Bhosari MIDC, Pune." };
export default function Work() {
  return (
    <>
      <PageHead kicker="Our work" title="Photo gallery" text="Photographs of our workshop and premises. Photos of completed coating jobs can be added in lib/site.ts." />
      <section className="wrap py-12"><Gallery /></section>
    </>
  );
}
