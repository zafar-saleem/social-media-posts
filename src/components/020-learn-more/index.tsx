"use client";

import Link from "next/link";
import styles from "./learn-more.module.css";
import Image from "next/image";
import React from "react";

export const LearnMoreCard = () => {
  const [hover, setHover] = React.useState(false);

  return (
    <div className={styles.card_container}>
      <header className={styles.card_header}>
        <span className={`${styles.card_header_title} ${hover ? styles.active : styles.inactive}`}>Rapid Insight</span>
      </header>
      <main className={styles.card_body}>
        <article>
          <p>Aggregated alerts in a prioritized news feed.</p>
        </article>
      </main>
      <footer className={styles.card_footer}>
        <Link href="" className={styles.card_footer_link} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <span className={styles.card_footer_label}>Learn More</span>
          <span className={styles.card_footer_icon}>
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigyNDAgMTU1IDg4KSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFycm93LXJpZ2h0LWljb24gbHVjaWRlLWFycm93LXJpZ2h0Ij48cGF0aCBkPSJNNSAxMmgxNCIvPjxwYXRoIGQ9Im0xMiA1IDcgNy03IDciLz48L3N2Zz4="
              width={15}
              height={15}
              alt=""
              className={`${styles.icon} ${hover ? styles.active : styles.inactive}`}
            />
          </span>
        </Link>
      </footer>
    </div>
  )
}
