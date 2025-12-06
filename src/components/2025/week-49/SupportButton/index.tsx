"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import React from "react";

export const SupportButton = () => {
  const [mode, setMode] = React.useState(false);

  return (
    <section className={styles.container}>
      <button className={`${mode ? styles.hide : styles.visible} ${styles.button}`} onClick={() => setMode(!mode)}>
        <input type="checkbox" className={styles.button_input} defaultChecked={mode ? true : false} />
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(182 181 190)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-headset-icon lucide-headset"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/><path d="M21 16v2a4 4 0 0 1-4 4h-5"/></svg>
        <span className={styles.button_label}>Need Help?</span>
      </button>
        <ContactMethodList setMode={setMode} mode={mode} />
    </section>
  )
}

export const ContactMethodList = ({ setMode, mode }: any) => {
  return (
    <section className={`${styles.options_list} ${mode ? styles.visible : styles.hide}`}>
      <div className={styles.header}>
        <h3 className={styles.title}>Need Help?</h3>
        <button className={styles.button_close} onClick={() => setMode(!mode)}>+</button>
      </div>
      <p className={styles.desc}>
        We are here to help 24/7. Choose your preferred contact method below.
      </p>
      <ul>
        <li>
          <Link href="#">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(189 189 193)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
            <div>
              <span className={styles.title}>Raise a ticket</span>
              <span className={styles.info}>Get a reply within 24 hours</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(189 189 193)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
          </Link>
        </li>
        <li>
          <Link href="#">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(189 189 193)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-more-icon lucide-message-circle-more"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>
            <div>
              <span className={styles.title}>Live Chat</span>
              <span className={styles.info}>2-3 minutes wait time</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(189 189 193)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
          </Link>
        </li>
        <li>
          <Link href="#">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(189 189 193)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
            <div>
              <span className={styles.title}>Talk to us</span>
              <span className={styles.info}>Receive an instant callback</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(189 189 193)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
          </Link>
        </li>
      </ul>
    </section>
  )
}