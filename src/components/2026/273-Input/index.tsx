"use client";

import React from "react";
import styles from "./styles.module.css";

export const Input = () => {
  const inputRef = React.useRef(null);
  const [hide, setHide] = React.useState('show');

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(234 234 234)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
      </div>
      <input
        type="text"
        className={styles.input}
        ref={inputRef} placeholder="Search members"
        onChange={(event) => {
          event.target.value.length >= 23 && setHide('hide')
          event.target.value.length <= 22 && setHide('show')
        }}
      />
      <p className={`${styles[hide]}`}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24" fill="none"
          stroke="rgb(151 150 151)"
          stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round"
          className={`lucide lucide-command-icon lucide-command`}>
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/>
        </svg>
        F
      </p>
    </div>
  )
}