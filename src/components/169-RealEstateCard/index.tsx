import styles from "./styles.module.css";
import Image from "next/image";
import map from "./assets/map.png";
import React from "react";
import Link from "next/link";

export const RealEstateCard = async () => {
  const data = await import("./data.json", {
    with:  { type: "json" }
  });

  return (
    <section className={styles.container}>
      {
        data.default.map((item, index) => (
          <section className={styles.card} key={index}>
            <section className={styles.images_list}>
            {
              item.images.map((image, i) => (
                <React.Fragment key={i}>
                  {
                    <Image
                      width={image.width}
                      height={image.height}
                      alt=""
                      src={image.src}
                    />
                  }
                </React.Fragment>
              ))
            }
            </section>
            <figure className={styles.card_media}>
              <span
                className={styles.mark}
                style={{
                  "--pos-x": item.location.lon,
                  "--pos-y": item.location.lat,
                }}
              >📍</span>
              <Image
                src={map}
                width={1082}
                height={1268}
                alt=""
                className={styles.card_map}
              />
              <Image
                src={item.main_image.src}
                width={item.main_image.width}
                height={item.main_image.height}
                alt={item.main_image.alt}
                className={styles.card_images}
                style={{
                  "--pos-x": item.location.lon,
                  "--pos-y": item.location.lat,
                }}
              />
              <figcaption className={styles.images_indicator}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-images-icon lucide-images"><path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"/><path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"/><circle cx="13" cy="7" r="1" fill="currentColor"/><rect x="8" y="2" width="14" height="14" rx="2"/></svg>
                <span className={styles.indicator_label}>{item.images.length}</span>
              </figcaption>
            </figure>
            <section className={styles.card_brief}>
              <div className={styles.card_info}>
                <h1 className={styles.card_title}>{item.title}</h1>
                <span className={styles.card_price}>{item.currency}{item.price}/{item.occurence}</span>
              </div>
              <div className={styles.card_amneties}>
                <div className={styles.amneties_bed}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(170 170 170)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bed-double-icon lucide-bed-double"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M12 4v6"/><path d="M2 18h20"/></svg>
                  <span className={styles.amneties_value}>{item.amneties.beds}</span>
                </div>
                <div className={styles.amneties_bed}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(170 170 170)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bath-icon lucide-bath"><path d="M10 4 8 6"/><path d="M17 19v2"/><path d="M2 12h20"/><path d="M7 19v2"/><path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/></svg>
                  <span className={styles.amneties_value}>{item.amneties.bath}</span>
                </div>
                <div className={styles.amneties_size}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(170 170 170)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ratio-icon lucide-ratio"><rect width="12" height="20" x="6" y="2" rx="2"/><rect width="20" height="12" x="2" y="6" rx="2"/></svg>
                  <span className={styles.amneties_value}>{item.size}<sup>2</sup></span>
                </div>
                <div className={styles.deposit}>
                  <span className={styles.deposit_value}>{item.deposit}</span>
                </div>
                <Link className={styles.btn_detail} href="#">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(170 170 170)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                </Link>
              </div>
            </section>
          </section>
        ))
      }
    </section>
  )
}