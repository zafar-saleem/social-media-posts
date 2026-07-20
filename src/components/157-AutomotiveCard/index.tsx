import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export const AutomotiveDetailCard = () => {
  return (
    <section className={styles.card}>
      <figure>
        <Image
          src="https://images.pexels.com/photos/404190/pexels-photo-404190.jpeg"
          width={100}
          height={100}
          alt=""
        />
        <figcaption>
          <section>
            <div>
              <span className={styles.card_name}>Ferrie</span>
              <span className={styles.card_modal}>2026 e-Tron MT</span>
            </div>
            <Link href="#">
              View Photos
            </Link>
            <section className={styles.gallery}>
              <Image
                src="https://images.pexels.com/photos/30889575/pexels-photo-30889575.jpeg"
                width={50}
                height={50}
                alt=""
              />
              <Image
                src="https://images.pexels.com/photos/30112301/pexels-photo-30112301.jpeg"
                width={50}
                height={50}
                alt=""
              />
              <Image
                src="https://images.pexels.com/photos/1085172/pexels-photo-1085172.jpeg"
                width={50}
                height={50}
                alt=""
              />
            </section>
          </section>
        </figcaption>
      </figure>
      <section className={styles.feature_list}>
        <div className={`${styles.flex} ${styles.gap25} ${styles.bold} ${styles.focus} ${styles.border_right} ${styles.v_center}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(106 181 0)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plug-zap-icon lucide-plug-zap"><path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"/><path d="m2 22 3-3"/><path d="M7.5 13.5 10 11"/><path d="M10.5 16.5 13 14"/><path d="m18 3-4 4h6l-4 4"/></svg>
          <span>Electric</span>
        </div>
        <div className={`${styles.flex} ${styles.col} ${styles.gap25}`}>
          <span className={`${styles.text_200} ${styles.text_size_200}`}>Power</span>
          <div className={`${styles.flex} ${styles.gap25} ${styles.bold}`}>
            <span className={`${styles.text_size_100}`}>670</span><span className={`${styles.text_size_300}`}>PS</span>
          </div>
        </div>
        <div className={`${styles.flex} ${styles.col} ${styles.gap25}`}>
          <span className={`${styles.text_200} ${styles.text_size_200}`}>0-62 mph</span>
          <div className={`${styles.flex} ${styles.gap25} ${styles.bold}`}>
            <span>2.9</span><span>seconds</span>
          </div>
        </div>
        <div className={`${styles.flex} ${styles.col} ${styles.gap25}`}>
          <span className={`${styles.text_200} ${styles.text_size_200}`}>Range</span>
          <div className={`${styles.flex} ${styles.gap25} ${styles.bold}`}>
            <span>600</span><span>miles</span>
          </div>
        </div>
      </section>
    </section>
  )
}