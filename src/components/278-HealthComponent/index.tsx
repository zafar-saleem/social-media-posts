"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import Body from "./image.png";
import React, { CSSProperties } from "react";

export const HealthComponent = () => {
  const [area, setArea] = React.useState("");
  const [level, setLevel] = React.useState("rgb(161 228 183)");

  console.log(area);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <select onChange={(e) => setArea(e.target.value)}>
          <option value="">Select Area</option>
          <option value="gut">Gut</option>
          <option value="liver">Liver</option>
          <option value="kidney">Kidney</option>
          <option value="metabolic">Metabolic</option>
          <option value="heart">Heart</option>
          <option value="skin">Skin</option>
        </select>
        <select className={styles.level} onChange={(e) => setLevel(e.target.value)}>
          <option value="rgb(161 228 183)">Good</option>
          <option value="rgb(193 216 138)">Neutral</option>
          <option value="rgb(246 148 215)">Bad</option>
        </select>
      </div>
      <div className={styles.box}>
        <div className={`${styles.area} ${styles.gut} ${area === "gut" && styles.show}`}
          // style={{ "--color": level } as CSSProperties}
        />
        <div className={`${styles.area} ${styles.liver} ${area === "liver" && styles.show}`} />
        <div className={`${styles.area} ${styles.kidney} ${area === "kidney" && styles.show}`} />
        <div className={`${styles.area} ${styles.metabolic} ${area === "metabolic" && styles.show}`} />
        <div className={`${styles.area} ${styles.heart} ${area === "heart" && styles.show}`} />
        <Image
          src={Body}
          width={4000}
          height={4000}
          alt=""
          className={`${area === "skin" && styles.skin} ${styles.body}`}
        />
      </div>
    </div>
  )
}