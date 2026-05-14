"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import React from "react";

export const ProductCard = () => {
  const [timer, setTimer] = React.useState(59);

  React.useEffect(() => {
    setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
  }, []);

  return (
    <Link href={`#`} className={styles.product_card}>
      <Image
        src="https://images.pexels.com/photos/1028704/pexels-photo-1028704.jpeg"
        width="3000"
        height="3000"
        alt=""
        className={styles.card_media}
      />
      <p className={styles.card_figure}>Limited Offer 08:30:{timer}</p>
      <div className={styles.card_icon}>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgb(237 237 237)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
      </div>
      <div className={styles.box}>
        <h1 className={styles.card_title}>Vanilla Cupcake</h1>
        <span className={styles.card_price}>£19.9</span>
      </div>
    </Link>
  )
}