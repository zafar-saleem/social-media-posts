"use client";

import React from "react";
import styles from "./styles.module.css";

export const Toggle = () => {
  const [expand, toggleExpand] = React.useState(true);

  return (
    <button className={styles.button_container} onClick={() => toggleExpand(!expand)}>
      <span className={`${styles.expand_container} ${expand ? styles.expand : styles.collapse}`}>
        <span className={`${styles.button_top} ${styles.button}`} />
        <span className={`${styles.button_bottom} ${styles.button}`} />
      </span>
      {/* <span className={styles.collapse_container}>
        <span className={`${styles.button_top} ${styles.button}`} />
        <span className={`${styles.button_bottom} ${styles.button}`} />
      </span> */}
    </button>
  )
}
