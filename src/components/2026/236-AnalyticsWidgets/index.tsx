"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import React from "react";

export const AnalyticsWidget = () => {
  const [width, setWidth] = React.useState("0%");

  React.useEffect(() => {
    setTimeout(() => {
      setWidth("80%");
    }, 10000);
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Total Active Listings</span>
      <div className={styles.stats}>
        <span>150</span>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(38 163 121)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up-icon lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>
          <span className={styles.highlight}>80</span>
        </div>
        <p>
          <span className={`${styles.bold} ${styles.highlight}`}>80%</span> Listings Goal
        </p>
      </div>




      <div className={styles.progress_bar} style={{ "--width": width }} />



      <p>
        You're 65% on the way to your listings goal. Keep going!
      </p>

      <Link href="#">More Details</Link>
    </div>
  )
}