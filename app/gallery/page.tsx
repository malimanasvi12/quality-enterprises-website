import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Gallery from "@/components/Gallery";
import WhatsAppLink from "@/components/WhatsAppLink";
import { getGallery } from "@/lib/gallery";
export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of powder-coated industrial components and the Quality Enterprises workshop in Bhosari MIDC, Pune.",
  openGraph: { title: "Gallery | Quality Enterprises", images: ["/photos/facility-entrance.jpg"] },
};
export default function GalleryPage() {
  const { all } = getGallery();
  return (
    <>
      <PageHead kicker="Gallery" title="Our work and workshop" text="Select any photo to view it full screen." />
      <section className="wrap py-12"><Gallery items={all} />
        <div className="mt-12 text-center"><WhatsAppLink label="Ask about your coating job on WhatsApp" /></div></section>
    </>
  );
}
