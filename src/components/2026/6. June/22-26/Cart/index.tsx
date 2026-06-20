"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import React from "react";
import Link from "next/link";
import { CART_ITEMS } from "./data";

export const Cart = () => {
  const [items] = React.useState(CART_ITEMS);

  return (
    <div className={styles.cart_container}>
      <RenderCartItems items={items} />
      <CartButton />
    </div>
  )
}

const RenderCartItems = ({ items }) => {
  return (
    <div className={styles.cart_list}>
      {
        items.map(item => (
          <figure className={styles.list_card} key={item.id}>
            <button className={styles.button_delete}>
              <svg
                width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round" className="lucide lucide-x-icon lucide-x">
                  <path d="M18 6 6 18"/>
                  <path d="m6 6 12 12"/>
              </svg>
            </button>
            <Link href="#">
              <Image
                src={item.image}
                width={item.width}
                height={item.width}
                alt={item.alt}
                className={styles.card_image}
              />
              <figcaption className={styles.card_block}>
                <span className={styles.card_title}>{item.title}</span>
                <span className={styles.card_price}>{item.currency}{item.price}</span>
              </figcaption>
            </Link>
          </figure>
        ))
      }
      <RenderCartFooter totalPrice={items.reduce((acc, curr) => acc + curr.price, 0)} />
    </div>
  )
}

const RenderCartFooter = ({ totalPrice }) => {
  return (
    <div className={styles.cart_footer}>
      <span className={styles.footer_total}>${totalPrice}</span>
      <Link href="#" className={styles.button_buy}>
        <span className={styles.button_text}>Buy now</span>
        <svg
          width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          strokeLinejoin="round" className="lucide lucide-move-right-icon lucide-move-right">
            <path d="M18 8L22 12L18 16"/>
            <path d="M2 12H22"/>
        </svg>
      </Link>
    </div>
  )
}

const CartButton = () => {  
  return (
    <label className={styles.toggle_button}>
      <input type="checkbox" className={styles.button_input} />
      <svg
        width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="rgb(255 255 255)" strokeWidth="2" strokeLinecap="round"
        strokeLinejoin="round" className={`lucide lucide-x-icon lucide-x ${styles.icon_close}`}
      >
        <path d="M18 6 6 18"/>
        <path d="m6 6 12 12"/>
      </svg>
      <svg
        width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="rgb(255 255 255)" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        className={`lucide lucide-shopping-cart-icon lucide-shopping-cart ${styles.icon_cart}`}
      >
        <circle cx="8" cy="21" r="1"/>
        <circle cx="19" cy="21" r="1"/>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
      </svg>
    </label>
  )
}
