"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import React from "react";
import Link from "next/link";
import { ViewTransition } from 'react'


const CART_ITEMS = {
  children: [
    {
      id: 1,
      image: "https://images.pexels.com/photos/10557898/pexels-photo-10557898.jpeg",
      width: 3000,
      height: 3000,
      alt: "",
      title: "Eco-Friendly Cleaning Products",
      price: 25,
      currency: "$",
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/15336637/pexels-photo-15336637.jpeg",
      width: 3000,
      height: 3000,
      alt: "",
      title: "Blue Plastic Basket",
      price: 15,
      currency: "$",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/28579295/pexels-photo-28579295.jpeg",
      width: 3000,
      height: 3000,
      alt: "",
      title: "Clothespins",
      price: 12,
      currency: "$",
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/8904068/pexels-photo-8904068.jpeg",
      width: 3000,
      height: 3000,
      alt: "",
      title: "Ceramic Bowls and Plates",
      price: 32,
      currency: "$",
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/3049238/pexels-photo-3049238.jpeg",
      width: 3000,
      height: 3000,
      alt: "",
      title: "Tableware, rug and Ceramic set",
      price: 62,
      currency: "$",
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/10574058/pexels-photo-10574058.jpeg",
      width: 3000,
      height: 3000,
      alt: "",
      title: "Soap dispenser and wooden brush",
      price: 22,
      currency: "$",
    },
    {
      id: 7,
      image: "https://images.pexels.com/photos/31975964/pexels-photo-31975964.jpeg",
      width: 3000,
      height: 3000,
      alt: "",
      title: "Forks and spoons",
      price: 16,
      currency: "$",
    },
    {
      id: 8,
      image: "https://images.pexels.com/photos/4107959/pexels-photo-4107959.jpeg",
      width: 3000,
      height: 3000,
      alt: "",
      title: "Toilet Paper",
      price: 5,
      currency: "$",
    },
    {
      id: 9,
      image: "https://images.pexels.com/photos/11882639/pexels-photo-11882639.jpeg",
      width: 3000,
      height: 3000,
      alt: "",
      title: "Kitchen Utensils",
      price: 35,
      currency: "$",
    },
  ]
}

export const Cart = () => {
  const [items, setItems] = React.useState(CART_ITEMS);

  return (
    <div className={styles.cart}>
      <div className={styles.cart_items}>
        <RenderItemsOrEmptyState items={items.children} setItems={setItems} />
        <Footer items={items.children} />
      </div>
      <CartButton />
    </div>
  )
}

const RenderItemsOrEmptyState = ({ items, setItems }) => {
  if (items.length > 0) {
    return <CartList items={items} setItems={setItems} />
  }

  return (
    <div className={styles.cart_empty}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(10 10 10)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-basket-icon lucide-shopping-basket"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="M4.5 15.5h15"/><path d="m5 11 4-7"/><path d="m9 11 1 9"/></svg>
      <p>Cart Empty</p>
    </div>
  )
}

const CartList = ({ items, setItems }) => {
  const deleteItem = (id) => {
    const newList = items.filter(item => {
      if (item.id === id) return;
      return item;
    })

    setItems({ children: newList });
  }

  console.log(items.length);

  return (
    <React.Fragment>
      {
        items.map(item => (
          <ViewTransition name={`box-${item.id}`}>
            <figure
              key={item.id}
              className={styles.cart_item}
            >
              <button
                className={styles.delete_button}
                onClick={() => deleteItem(item.id)}
              >
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="rgb(255 255 255)" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round" className={`lucide lucide-x-icon lucide-x ${styles.icon_close}`}
                >
                  <path d="M18 6 6 18"/>
                  <path d="m6 6 12 12"/>
                </svg>
              </button>
              <Image
                src={item.image}
                width={item.width}
                height={item.height}
                alt={item.alt}
              />       
              <figcaption>
                <h1>{item.title}</h1>
                <span>{item.currency}{item.price}</span>
              </figcaption>
            </figure>
          </ViewTransition>
        ))
      }
    </React.Fragment>
  )
}

const calculateTotalPrice = (items) => {
  return items.reduce((acc: number, item) => acc + item.price, 0);
};

const TotalPrice = ({ items }) => {
  return (
    <span className={styles.items_total}>${calculateTotalPrice(items)}</span>
  )
}

const Footer = ({ items }) => {
  return (
    <footer className={styles.items_footer}>
      <TotalPrice items={items} />
      <Link href={`#`} className={styles.buy_button}>
        <span className={styles.button_label}>Buy now</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
      </Link>
    </footer>
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