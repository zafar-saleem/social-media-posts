"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import React, { CSSProperties } from "react";

const DATA = {
  bike_name: "Cruiser ST",
  bike_model: "131231238986",
  distance: "65km",
  time: "42m",
  charged: "150w",
  bike_image: "https://preview.free3d.com/img/2022/06/3190232616578057410/v6l7o3ak.jpg",
  bike_percentage: "27%",
  current_distance: 15,
  direction: 0,

}

export const SmartMobilty = () => {
  const [data, setData] = React.useState(DATA);

  React.useEffect(() => {
    setInterval(() => {
      setData((prev) => ({...DATA, direction: Math.random() * (90 - 0) + 0}))
    }, 1000);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>{data.bike_name}</h2>
          <span className={styles.model}>{data.bike_model}</span>
        </div>
        <div>
          <div className={styles.badge}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(125 125 125)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
            <span className={styles.label}>{data.distance}</span>
          </div>
          <div className={styles.badge}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(125 125 125)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock8-icon lucide-clock-8"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l-4 2"/></svg>
            <span className={styles.label}>{data.time}</span>
          </div>
          <div className={styles.badge}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(125 125 125)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap-icon lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
            <span className={styles.label}>{data.charged}</span>
          </div>
        </div>
      </div>
      <div className={styles.bike}>
        <Image
          src={data.bike_image}
          height={400}
          width={400}
          alt=""
        />
        <div className={styles.percentage}></div>
      </div>
      <div className={styles.direction}>
        <div className={styles.compass}>
          <svg
           width="40" height="40"
           viewBox="0 0 24 24" fill="none"
           stroke="rgb(89 89 89)" stroke-width="2"
           stroke-linecap="round"
           stroke-linejoin="round"
           style={{
            "--direction": `${data.direction}deg`,
           } as CSSProperties}
           className={`lucide lucide-arrow-up-right-icon lucide-arrow-up-right`}>
            <path d="M7 7h10v10"/>
            <path d="M7 17 17 7"/>
          </svg>
        </div>
        <span className={styles.badge}>{data.current_distance}ft away</span>
      </div>
    </div>
  )
}