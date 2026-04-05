"use client";

import styles from "./styles.module.css";

export const CopyEmailButton = () => {
  const copyEmailAddress = () => {
    navigator.clipboard.writeText("contact@email.com");
  }

  return (
    <>
      <label className={styles.button}>
        <div className={`${styles.box} ${styles.initial_text}`}>
          <span className={styles.text}>E-Mail</span>
        </div>
        <div className={`${styles.box} ${styles.hover_text}`}>
          <span className={styles.text}>Click to copy</span>
        </div>
        <input type="checkbox" onChange={copyEmailAddress} />
        <div className={`${styles.box} ${styles.final_text}`}>
          <span className={styles.text}>Copied!</span>
        </div>
      </label>
      <textarea className={styles.test_copy} placeholder="Paste copied email address here!"></textarea>
    </>
  )
}