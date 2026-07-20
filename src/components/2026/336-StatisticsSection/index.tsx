import Image from "next/image";
import styles from "./styles.module.css";
import mobile from "./assets/stats_mobile.png";
import desktop from "./assets/stats.png";

export const StatisticsSection = () => {
  return (
    <article className={styles.statistics}>
      <h1 className={styles.statistics_title}>
        <span>Built on Performance.</span>
        <span>Proven by Results.</span>
      </h1>
      <p className={styles.statistics_copy}>
        From on-time delivery rates to international coverage, our numbers show the standard we operate at every day.
      </p>
      <div className={styles.stats_mobile}>
        <div className={styles.bar}>
          <span>98.7%</span>
          <span>On-Time Delivery Rate</span>
        </div>
        <div className={styles.bar}>
          <span>250K+</span>
          <span>Shipments Delivered Annually</span>
        </div>
        <div className={styles.bar}>
          <span>39+</span>
          <span>Countries Served</span>
          <span>(12 Years)</span>
        </div>
      </div>
      {/* <Image
        src={mobile}
        width={1000}
        height={1000}
        alt=""
        className={styles.stats_mobile}
      />
      <Image
        src={desktop}
        width={1000}
        height={1000}
        alt=""
        className={styles.stats_desktop}
      /> */}
    </article>
  )
}