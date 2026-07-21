import styles from "./styles.module.css";
import illustration from "./assets/1.png";
import Image from "next/image";

export const RatingsSection = () => {
  return (
    <div className={styles.ratings}>
      <h1 className={styles.ratings_title}>Ratings</h1>
      <span className={styles.ratings_heading}>See the full report</span>
      <p className={styles.ratings_microcopy}>
        AI turns reviews, timings, area context, and your preferences into one clear view before you choose a place.
      </p>
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
    </div>
  )
}