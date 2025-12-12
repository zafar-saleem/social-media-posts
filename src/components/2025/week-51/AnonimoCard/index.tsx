"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import React from "react";

export const AnonimoCard = () => {
  const [counter, setCounter] = React.useState(1);

  return (
    <section className={styles.card}>
      <div className={`${styles.product_info} ${styles.padding}`}>
        <h1 className={styles.product_title}>Espressinator</h1>
        <p className={styles.product_subtitle}>Barista-level refreshment</p>
        <span className={styles.product_price}>$350.00</span>
      </div>

      <div className={`${styles.product_reviews} ${styles.padding_vertical}`}>
        <div className={styles.reviews_stars}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="rgb(122 59 232)" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="rgb(122 59 232)" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="rgb(122 59 232)" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="rgb(122 59 232)" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="rgb(122 59 232)" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
        </div>
        <span className={styles.reviews_label}>269 reviews</span>
      </div>



      <p className={styles.product_description}>
        The Espressinator transforms water into soft, chewable nugget ice-perfect for espresso chillers, iced lattes, or cocktail creations.
      </p>


      <div className={styles.product_controls}>
        <div className={styles.product_counter}>
          <button onClick={() => {
            setCounter(() => {
              if (counter > 1) {
                return counter - 1
              }

              return counter;
            })
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(57 57 62)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus-icon lucide-minus"><path d="M5 12h14"/></svg>
          </button>
          <input type="text" defaultValue={counter} />
          <button onClick={() => {
            setCounter(() => {
              if (counter <= 9) {
                return counter + 1
              }
              return counter;
            })
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(57 57 62)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          </button>
        </div>

        <button className={styles.button_buy}>
          <span>Buy now</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(245 255 252)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </div>



      <div className={styles.separator} />



      <p className={styles.product_more}>
        <Link href="#" className={styles.more_link}>
          <span className={styles.label}>View more details</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(133 133 145)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
        </Link>
      </p>
    </section>
  )
}