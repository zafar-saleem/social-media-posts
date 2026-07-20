"use client";

import styles from "./order.module.css";
import icon from "./assets/truck.webp";
import Image from "next/image";
import React from "react";

export const Order = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <button className={`${styles.button} ${toggle ? styles.rotate : ""}`} onClick={() => setToggle(!toggle)}>
      <span className={`${toggle ? styles.hide : ""} ${styles.button_initial_label}`}>Complete Order</span>
      <Image
        src={icon}
        width={50}
        height={50}
        alt=""
        className={`${toggle ? styles.reveal : ""} ${styles.button_icon}`}
      />
      {/* <div className={styles.road}>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div> */}
      <span className={`${styles.label} ${styles.button_finished_label}`}>Order Placed</span>
    </button>
  )
}
