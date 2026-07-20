"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import React from "react";

export const DonationCard = () => {
  const [progress, setProgress] = React.useState(0);
  const [total, setTotal] = React.useState(5);

  return (
    <div className={styles.donation_card}>
      <div className={styles.card_header}>
        <h1 className={styles.header_title}>Plant a Forest</h1>
        <span className={styles.header_copy}>Amazon Restoration Project</span>
        <button className={styles.header_button}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(94 94 94)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
        </button>
      </div>

      <div className={styles.card_images}>
        <Image width="100" height="100" src="https://img.icons8.com/stickers/100/deciduous-tree.png" alt="deciduous-tree" />
        <Image width="100" height="100" src="https://img.icons8.com/stickers/100/deciduous-tree.png" alt="deciduous-tree" />
        <Image width="100" height="100" src="https://img.icons8.com/stickers/100/deciduous-tree.png" alt="deciduous-tree" />
        <Image width="100" height="100" src="https://img.icons8.com/stickers/100/deciduous-tree.png" alt="deciduous-tree" />
        <Image width="100" height="100" src="https://img.icons8.com/stickers/100/deciduous-tree.png" alt="deciduous-tree" />
      </div>



      <div className={styles.card_text}>
        <span className={styles.text_label}>{total} trees</span> <span className={styles.symbol}>=</span> <span className={styles.card_value}>~{Math.floor(total * 21.6)} kg CO<sub>2</sub></span><span className={styles.scale}>/ year</span>
      </div>




      <div className={styles.card_quantity}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="rgb(162 162 162)" stroke="rgb(162 162 162)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tree-deciduous-icon lucide-tree-deciduous"><path d="M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"/><path d="M12 19v3"/></svg>
        <span className={styles.text}>Quantity</span>

        <input
          type="range"
          min="0" max="60"
          defaultValue={total}
          onChange={(event) => {
            let value = (event.currentTarget.valueAsNumber - parseInt(event.currentTarget.min)) / ((parseInt(event.currentTarget.max) - parseInt(event.currentTarget.min))) * 100;
            setProgress(value);
            setTotal(event.target.valueAsNumber);
          }}
          style={{
            "--value": `${progress}%`,
          }}
        />
      </div>



      <div className={styles.card_footer}>
        <span className={styles.total_price}>Total ${total * 1.25}</span>
        <span className={styles.per_tree}>($1.25 per tree x 5)</span>
        <Link href="#" className={styles.button}>
          <span className={styles.text}>Plant {total} trees</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(248 255 254)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Link>
      </div>
    </div>
  )
}