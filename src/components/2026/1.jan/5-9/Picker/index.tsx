"use client";

import React from "react";
import styles from "./styles.module.css";

export const Picker = () => {
  const [isActive, setIsActive] = React.useState("public");

  return (
    <>
      <button className={styles.button_picker} popoverTarget="tooltip">
        <div className={`${styles.label_public} ${isActive === "public" && styles.public}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(182 182 182)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
          <span>Public</span>
        </div>
        <div className={`${styles.label_private} ${isActive === "private" && styles.private}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(184 184 184)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-icon lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          <span>Private</span>
        </div>
      </button>
      <section id="tooltip" className={styles.button_tooltip} popover="auto">
        <button
          className={`${styles.label_public} ${isActive === "public" && styles.public}`}
          onClick={() => setIsActive("public")}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(182 182 182)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
          <span>Public</span>
        </button>
        <button
          className={`${styles.label_private} ${isActive === "private" && styles.private}`}
          onClick={() => setIsActive("private")}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(184 184 184)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-icon lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          <span>Private</span>
        </button>
      </section>
    </>
  )
}
