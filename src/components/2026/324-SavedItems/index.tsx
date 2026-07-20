"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import React from "react";
import { DATA as initialValues } from "./data";

export const SavedItems = () => {
  const [data] = React.useState(initialValues);

  return (
    <div className={styles.saved_items}>
      <div className={styles.items_header}>
        <div className={styles.header_group}>
          <h3 className={styles.items_name}>Saved</h3>
          <span className={styles.total_items}>{initialValues.total_items} items</span>
        </div>
        <span className={styles.total_amount}>
          {
            Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: data.currency,
              }).format(data.total_amount)
          }
        </span>
        <Filters />
      </div>
      <RenderCardsList {...data} />
    </div>
  )
}

const RenderCardsList = ({ ...props }) => {
  return (
    <div className={`${styles.items_contents}`}>
      {
        props.children.map(item => (
          <CardItem key={item.id} item={item} />
        ))
      }
    </div>
  )
}

const Filters = () => {
  return (
    <div className={styles.items_filter}>
      <label className={`${styles.all} ${styles.filter_pill}`}>
        <input type="radio" name="filter" defaultChecked />
        <span className={styles.filter_label}>All</span>
      </label>
      <label className={`${styles.tops} ${styles.filter_pill}`}>
        <input type="radio" name="filter" />
        <span className={styles.filter_label}>Tops</span>
      </label>
      <label className={`${styles.shoes} ${styles.filter_pill}`}>
        <input type="radio" name="filter" />
        <span className={styles.filter_label}>Shoes</span>
      </label>
      <label className={`${styles.bottoms} ${styles.filter_pill}`}>
        <input type="radio" name="filter" />
        <span className={styles.filter_label}>Bottoms</span>
      </label>
      <label className={`${styles.outwear} ${styles.filter_pill}`}>
        <input type="radio" name="filter" />
        <span className={styles.filter_label}>Outwear</span>
      </label>
      <label className={`${styles.bags} ${styles.filter_pill}`}>
        <input type="radio" name="filter" />
        <span className={styles.filter_label}>Bags</span>
      </label>
    </div>
  )
}

const CardItem = ({ item }) => {
  return (
    <React.Fragment>
      <Link href="#" className={`${styles[item.category]} ${styles.all} ${styles.item_card}`}>
        <Image
          src={item.src}
          width={1000}
          height={1000}
          alt=""
          className={styles.card_photo}
        />
        <span className={styles.card_brand}>{item.brand}</span>
        <h3 className={styles.card_title}>{item.title}</h3>
        <span className={styles.card_price}>
          {
            Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: item.currency,
              }).format(item.price)
          }
        </span>
      </Link>
    </React.Fragment>
  )
}
