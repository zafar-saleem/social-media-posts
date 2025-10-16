"use client";

import React from "react";
import styles from "./Preloader.module.css";

export const Preloader = () => {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    let timeout = setTimeout(() => {
      setCurrent((prev) => {
        if (current <= 2) return prev = current + 1;
        return 0;
      })
    }, 3000);

    return () => clearTimeout(timeout);
  }, [current]);

  return (
    <section className={styles.container}>
      <span className={styles.icon}>M</span>
      <div className={styles.contents}>
        <span className={styles.name}>Mintlify</span>
        <span className={styles.badge}>APP</span>
        <span className={styles.timestamp}>Just Now</span>
        <div className={styles.current_status}>
          <p className={`${styles.text} ${current === 0 && styles[`current_${current}`]}`}>Checking available repositories...</p>
          <p className={`${styles.text} ${current === 1 && styles[`current_${current}`]}`}>Listing commits for mintlify/docs...</p>
          <p className={`${styles.text} ${current === 2 && styles[`current_${current}`]}`}>Reading through PRs...</p>
        </div>
      </div>
    </section>
  )
}
