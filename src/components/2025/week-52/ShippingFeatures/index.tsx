import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";

export const ShippingFeaturesSection = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.section_title}>Reliable Shipping, Fast Delivery, Worldwide Reach.</h2>
      <p className={styles.section_description}>From local deliveries to international shipments, we ensure secure, timely, and cost-effective shipping solutions tailored to your needs. Get started today and experience hassle-free logistics.</p>
      <div className={styles.section_image}>
        <Image
          src="https://images.pexels.com/photos/1267325/pexels-photo-1267325.jpeg"
          width={1200}
          height={900}
          alt=""
        />
      </div>
      <article className={`${styles.section_article}`}>
        <h3 className={styles.feature_subtitle}>Express Shipping</h3>
        <p className={styles.feature_description}>Fast and secure delivery for urgent shipments.</p>
        <Link href="#" className={styles.section_link}>
          <span className={styles.link_text}>Learn more</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(2 2 2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Link>
      </article>
      <article className={`${styles.section_article}`}>
        <h3 className={styles.feature_subtitle}>Speed and Reliability</h3>
        <p className={styles.feature_description}>95% of our deliveries arrive on time or earlier.</p>
        <Link href="#" className={styles.section_link}>
          <span className={styles.link_text}>Learn more</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(2 2 2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Link>
      </article>
      <article className={`${styles.section_article}`}>
        <h3 className={styles.feature_subtitle}>Tracking and security</h3>
        <p className={styles.feature_description}>Real-time tracking and secure handling of evey package.</p>
        <Link href="#" className={styles.section_link}>
          <span className={styles.link_text}>Learn more</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(2 2 2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Link>
      </article>
      <article className={`${styles.section_article}`}>
        <h3 className={styles.feature_subtitle}>International Shipping</h3>
        <p className={styles.feature_description}>Seamless cross-border delivery with customs support.</p>
        <Link href="#" className={styles.section_link}>
          <span className={styles.link_text}>Learn more</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(2 2 2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Link>
      </article>
    </section>
  )
}