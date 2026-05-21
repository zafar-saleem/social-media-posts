"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import Coffee_1 from "./assets/1.png";
import Coffee_2 from "./assets/2.png";
import Coffee_3 from "./assets/3.png";
import Coffee_4 from "./assets/4.png";
import Coffee_5 from "./assets/5.png";
import React from "react";

export const SelectShots = () => {
  const [quantity, setQuantity] = React.useState(1);

  return (
    <form className={styles.shots}>
      <h1 className={styles.shots_title}>Custom Roasted Espresso</h1>



      <div className={styles.shots_carousel}>
        <div className={`${styles.coursel_scroller} ${styles[`show_${quantity}`]}`}>
          <figure className={`${styles.scroller_coffee}`}>
            <Image
              src={Coffee_1}
              width={132}
              height={122}
              alt=""
              className={`${styles.coffee_cup}`}
            />
            <figcaption className={styles.coffee_strength}>Light</figcaption>
          </figure>
          <figure className={`${styles.scroller_coffee}`}>
            <Image
              src={Coffee_2}
              width={132}
              height={122}
              alt=""
              className={`${styles.coffee_cup}`}
            />
            <figcaption className={styles.coffee_strength}>Regular</figcaption>
          </figure>
          <figure className={`${styles.scroller_coffee}`}>
            <Image
              src={Coffee_3}
              width={132}
              height={122}
              alt=""
              className={`${styles.coffee_cup}`}
            />
            <figcaption className={styles.coffee_strength}>Medium</figcaption>
          </figure>
          <figure className={`${styles.scroller_coffee}`}>
            <Image
              src={Coffee_4}
              width={132}
              height={122}
              alt=""
              className={`${styles.coffee_cup}`}
            />
            <figcaption className={styles.coffee_strength}>Medium Dark</figcaption>
          </figure>
          <figure className={`${styles.scroller_coffee}`}>
            <Image
              src={Coffee_5}
              width={132}
              height={122}
              alt=""
              className={`${styles.coffee_cup}`}
            />
            <figcaption className={styles.coffee_strength}>Dark</figcaption>
          </figure>
        </div>

        
      </div>



      <div className={`${styles.indicators} ${styles[`show_${quantity}`]}`}>
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>







      <div className={styles.shots_toggle}>
        <button className={styles.toggle_button_decrease}
          onClick={(event) => {
            event.preventDefault();

            setQuantity(() => {
              if (quantity > 1) return quantity - 1;
              return quantity;
            })
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(81 52 20)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-icon lucide-minus"><path d="M5 12h14"/></svg>
        </button>
        <input
          type="text"
          className={`
            ${styles.toggle_quantity}
            ${quantity > 0 && styles[`highlight_${quantity}`]}
          `}
          placeholder="1"
          defaultValue={quantity}
        />
        <button
          className={styles.toggle_button_increase}
          onClick={(event) => {
            event.preventDefault();

            setQuantity(() => {
              if (quantity < 5) return quantity + 1;
              return quantity;
            })
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(81 52 20)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        </button>
        <span className={styles.shots_label}>{quantity === 0 ? `shot` : `shots`}</span>
      </div>




      <article className={styles.shots_copy}>
        <h2 className={styles.copy_title}>Interesting Fact</h2>
        <p className={styles.copy_text}>Many cafes won't list it, but saying "quad" is like a secret handshake.</p>
      </article>



      <button className={styles.button_order} type="button">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(255 252 246)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag-icon lucide-shopping-bag"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>
        <span className={styles.text}>Add to order ($6.50)</span>
      </button>
    </form>
  )
}