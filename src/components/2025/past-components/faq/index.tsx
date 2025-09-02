"use client";

import React from "react";
import styles from "./faq.module.css";

export const FAQ = () => {
  return (
    <div className={styles.faq_container}>

      <article className={`${styles.faq_card}`}>
        <p>Lorem ipsum dolor sit amet?</p>
      </article>

      <article className={`${styles.faq_card}`}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, cumque?</p>
      </article>

      <article className={`${styles.faq_card}`}>
        <p>Amet consectetur, adipisicing elit. Error, cumque?</p>
      </article>

      <article className={`${styles.faq_card}`}>
        <p>Quia excepturi perspiciatis dolorem deserunt asperiores?</p>
      </article>
    </div>
  )
}