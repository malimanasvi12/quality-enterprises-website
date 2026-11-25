import fs from "fs";
import path from "path";
import { photos, workItems } from "./site";
export type GalleryItem = { src: string; alt: string; caption: string; cat: string };
// Server-only. Lists work photos that actually exist in public/images/gallery, plus the workshop photos.
export function getGallery(): { work: GalleryItem[]; all: GalleryItem[] } {
  const dir = path.join(process.cwd(), "public", "images", "gallery");
  const work = workItems
    .filter(w => fs.existsSync(path.join(dir, w.file)))
    .map(w => ({ src: `/images/gallery/${w.file}`, alt: w.alt, caption: w.caption, cat: "Our Work" }));
  const shop = photos.map(p => ({ src: p.src, alt: p.alt, caption: p.caption, cat: p.cat }));
  return { work, all: [...work, ...shop] };
}
