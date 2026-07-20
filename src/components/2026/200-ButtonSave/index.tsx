"use client";

import React from "react";
import styles from "./styles.module.css";

export const ButtonSave = () => {
  const [status, setStatus] = React.useState("initial");

  React.useEffect(() => {
    if (status !== "pending") return;
    setTimeout(() => {
      setStatus("done");
    }, 5000);
  }, [status]);

  return (
    <section className={styles.button_container}>
      <button
        className={`${styles.button}`}
        onClick={() => {
          setStatus(() => {
            if (status === "initial") return "pending";
            return "initial";
          })
        }}
      >
        <span className={`${styles.label} ${status === "initial" && styles.initial}`}>Save</span>
        <p className={`${styles.label} ${status === "pending" && styles.pending}`}>
          <span className={styles.button_icon}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(149 149 149)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${styles.status_pending} lucide lucide-refresh-cw-icon lucide-refresh-cw`}>
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
                <path d="M21 3v5h-5"/>
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
                <path d="M8 16H3v5"/>
              </svg>
          </span>
          <span className={`${styles.label} ${status === "done" && styles.done}`}>
            <span>Saving</span>
          </span>
        </p>
        <p className={`${styles.label} ${status === "done" && styles.done}`}>
          <span className={styles.done_icon}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(2 150 86)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-check-icon lucide-check">
                <path d="M20 6 9 17l-5-5"/>
            </svg>
          </span>
          <span>Saved</span>
        </p>
      </button>
    </section>
  )
}
