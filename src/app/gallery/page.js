import Image from "next/image";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import styles from "./page.module.css";

export const metadata = {
  title: "Gallery | Austine Omondi Campaign",
  description:
    "Photos from Austine Omondi's campaign trail in Karura Ward.",
};

function getGalleryImages() {
  const dir = join(process.cwd(), "public/gallery");
  const files = readdirSync(dir);
  return files
    .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .sort()
    .reverse();
}

export default function Gallery() {
  const images = getGalleryImages();

  return (
    <>
      <section className={`section ${styles.intro}`}>
        <div className="container">
          <h1 className="section-title">Gallery</h1>
          <p className="section-subtitle">
            Moments from the campaign trail, community engagements, and the
            journey so far.
          </p>
        </div>
      </section>

      <section className={`section ${styles.gallery}`}>
        <div className="container">
          <div className={styles.grid}>
            {images.map((src) => (
              <div key={src} className={styles.item}>
                <Image
                  src={`/gallery/${src}`}
                  alt="Campaign photo"
                  width={400}
                  height={300}
                  className={styles.img}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
