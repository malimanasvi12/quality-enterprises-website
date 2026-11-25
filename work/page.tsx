
import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Gallery from "@/components/Gallery";
import { getGallery } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Photographs of the Quality Enterprises workshop in Bhosari MIDC, Pune.",
};

export default function Work() {
  const { all } = getGallery();

  return (
    <>
      <PageHead
        kicker="Our work"
        title="Photo gallery"
        text="Photographs of our workshop and completed coating work."
      />
      <section className="wrap py-12">
        <Gallery items={all} />
      </section>
    </>
  );
}
