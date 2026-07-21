import styles from "./styles.module.css";
import illustration from "./assets/1.png";
import Image from "next/image";
import capterra from "./assets/capterra.png";
import trust_pilot from "./assets/trust_pilot.png";
import Link from "next/link";

export const RatingsSection = () => {
  return (
    <div className={styles.ratings}>
      <h1 className={styles.ratings_title}>Ratings</h1>
      <span className={styles.ratings_heading}>Make confident choices with 100% confidence</span>
      <p className={styles.ratings_microcopy}>
        AI analyzes 200k+ reviews, timings, area context, and your preference into one clear view.
      </p>
      <div className={styles.ratings_proof}>
        <article className={styles.proof_box}>
          <span className={styles.box_title}>User Trusted & Verified</span>
          <p className={styles.box_microcopy}>Based on over 500 verified user reviews.</p>
        </article>
        <div className={styles.box_logos}>
          <Image
            width={100}
            height={100}
            src={capterra}
            alt=""
            className={styles.logos}
          />
          <Image
            width={100}
            height={100}
            src={trust_pilot}
            alt=""
            className={styles.logos}
          />
        </div>
      </div>
      <Image
        src={illustration}
        width={3000}
        height={3000}
        alt=""
        className={styles.ratings_illustrations}
      />
      <div className={styles.ratings_kpis}>
        <p className={styles.kips_box}>
          <span className={styles.box_title}>200k+ Signals</span>
          <span className={styles.box_copy}>Compared before ranking</span>
        </p>
        <p className={styles.kips_box}>
          <span className={styles.box_title}>8 Factors</span>
          <span className={styles.box_copy}>Weighted Per Request</span>
        </p>
        <p className={styles.kips_box}>
          <span className={styles.box_title}>1 Fit Report</span>
          <span className={styles.box_copy}>Built For Your Situation</span>
        </p>
      </div>
      <Link href={`#`} className={styles.button_generate}>Generate your free AI report</Link>
    </div>
  )
}