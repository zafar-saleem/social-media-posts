"use client";

import Webcam from "react-webcam";
import styles from "./styles.module.css";

export const MirrorButton = () => {
  return (
    <button className={styles.button}>
      <Webcam className={styles.webcam} />
      <span className={styles.label}>Button</span>
    </button>
  )
}