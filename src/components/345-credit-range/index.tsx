"use client";

import React, { CSSProperties } from "react";
import styles from "./styles.module.css";

export const CreditRange = () => {
  const [credits, setCredits] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  
  return (
    <div className={styles.container}>
      <h1 className={styles.credit_title}>Add Credit</h1>
      <div className={styles.credit_group}>
        <span className={styles.credits}>{Intl.NumberFormat("en-US").format(credits * 10)}</span>
        <span className={styles.credit_label}>AI Credit for Workspace</span>
        <span className={styles.credit_value}>${credits}</span>
      </div>
      <input
        type="range"
        className={styles.slider}
        min={100}
        max={1000}
        step={100}
        style={{
          "--progress": `${progress}%`,
        } as CSSProperties}
        onChange={(event) => {
          const percent = (
            (
              event.currentTarget.valueAsNumber - parseInt(event.currentTarget.min)
            ) / (
              parseInt(event.currentTarget.max) - parseInt(event.currentTarget.min)
            )
          ) * 100;
          
          setProgress(percent);
          setCredits(event.currentTarget.valueAsNumber);
        }}
      />
      <div className={styles.text_group}>
        <p className={styles.text_block}>
          You can purchase extra credits in predefined packs, purchased credits don't expire.
        </p>
        <p className={styles.text_block}>
          Credits are tied to workspace level. Everyone subtracts usage from the same pool.
        </p>
      </div>
      <div className={styles.buttons_group}>
        <button className={styles.credit_checkout}>Check Out</button>
        <button className={styles.credit_cancel}>Cancel</button>
      </div>
    </div>
  )
}