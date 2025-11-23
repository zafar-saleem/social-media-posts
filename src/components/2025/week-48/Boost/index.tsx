"use client";

import React from "react";
import styles from "./styles.module.css";
import { POSITION_COUNTER } from "./positions";

export const Boost = () => {
  const [boostCounter, setBoostCounter] = React.useState(0);
  const [click, setClick] = React.useState(false);

  return (
    <button
      className={`${styles.button} ${click && styles.clicked}`}
      onClick={() => {
        setBoostCounter(() => {
          if (boostCounter < 9) return boostCounter + 1;
          return boostCounter;
        });
        
        setClick(true);
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgb(255 139 56)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`lucide lucide-flame-icon lucide-flame`}>
          <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/>
      </svg>
      <div className={`${styles.button_scroller}`} style={{ "--position": `${POSITION_COUNTER[boostCounter]}rem`}}>
        <span className={`${styles.button_label}`}>0</span>
        <span className={`${styles.button_label}`}>1</span>
        <span className={`${styles.button_label}`}>2</span>
        <span className={`${styles.button_label}`}>3</span>
        <span className={`${styles.button_label}`}>4</span>
        <span className={`${styles.button_label}`}>5</span>
        <span className={`${styles.button_label}`}>6</span>
        <span className={`${styles.button_label}`}>7</span>
        <span className={`${styles.button_label}`}>8</span>
        <span className={`${styles.button_label}`}>9</span>
      </div>
    </button>
  )
}