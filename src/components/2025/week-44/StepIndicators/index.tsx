"use client";

import React from "react";
import styles from "./StepIndicators.module.css";

export const StepIndicators = () => {
  const [counter, setCounter] = React.useState(1);

  return (
    <section className={styles.container}>
      <span className={styles.current_step}>{counter}/5</span>
      <ul className={styles.steps}>
        <li>
          {counter >= 1 && <input type="checkbox" defaultChecked />}
          <button
            className={`${counter === 1 && styles.active}`}
            onClick={() => setCounter(() => 1)}
          >
            {/* <span className={styles.icon}>!</span> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(252 252 252)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet-icon lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>
          </button>
          <span className={styles.step_label}>Choose a secure wallet type</span>
        </li>
        <li>
          {counter >= 2 && <input type="checkbox" defaultChecked />}
          <button
            className={`${counter === 2 && styles.active}`}
            onClick={() => setCounter(() => 2)}
          >
            {/* <span className={styles.icon}>!</span> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(252 252 252)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-lock2-icon lucide-file-lock-2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><rect width="8" height="5" x="2" y="13" rx="1"/><path d="M8 13v-2a2 2 0 1 0-4 0v2"/></svg>
          </button>
          <span className={styles.step_label}>Set Up a Strong Password</span>
        </li>
        <li>
          {counter >= 3 && <input type="checkbox" defaultChecked />}
          <button
            className={`${counter === 3 && styles.active}`}
            onClick={() => setCounter(() => 3)}
          >
            {/* <span className={styles.icon}>!</span> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(252 252 252)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database-backup-icon lucide-database-backup"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 12a9 3 0 0 0 5 2.69"/><path d="M21 9.3V5"/><path d="M3 5v14a9 3 0 0 0 6.47 2.88"/><path d="M12 12v4h4"/><path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"/></svg>
          </button>
          <span className={styles.step_label}>Backup Your Recovery Phrase</span>
        </li>
        <li>
          {counter >= 4 && <input type="checkbox" defaultChecked />}
          <button
            className={`${counter === 4 && styles.active}`}
            onClick={() => setCounter(() => 4)}
          >
            {/* <span className={styles.icon}>!</span> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(252 252 252)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scan-search-icon lucide-scan-search"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/><path d="m16 16-1.9-1.9"/></svg>
          </button>
          <span className={styles.step_label}>Verify Your Wallet Security Settings</span>
        </li>
        <li>
          {counter >= 5 && <input type="checkbox" defaultChecked />}
          <button
            className={`${counter === 5 && styles.active}`}
            onClick={() => setCounter(() => 5)}
          >
            {/* <span className={styles.icon}>!</span> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(252 252 252)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flag-icon lucide-flag"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"/></svg>
          </button>
          <span className={styles.step_label}>Fund Your Wallet With Crypto</span>
        </li>
      </ul>
    </section>
  )
}