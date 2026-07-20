"use client";

import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const DATA = {
  image: {
    src: "https://images.pexels.com/photos/5179530/pexels-photo-5179530.jpeg",
    width: 3000,
    height: 3000,
    alt: "",
  },
  guest_favorite: true,
  like: true,
  title: "Business Day",
  subtitle: "Quiet, Clean, Peaceful, Modern, ...",
  price: "$3,679",
  occurence: "m",
  ameneties: [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(110 110 110)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bed-double-icon lucide-bed-double"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M12 4v6"/><path d="M2 18h20"/></svg>,
      value: 2,
      label: "Beds",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(110 110 110)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bath-icon lucide-bath"><path d="M10 4 8 6"/><path d="M17 19v2"/><path d="M2 12h20"/><path d="M7 19v2"/><path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/></svg>,
      value: 2,
      label: "Baths",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(110 110 110)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ruler-icon lucide-ruler"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg>,
      value: 1150,
      label: "Sqft",
    },
  ]
}

export const PropertyCard = () => {
  const [data, setData] = React.useState(DATA);

  const toggleLike = () => {
    setData(() => ({...data, like: !data.like}));
  }

  return (
    <div className={styles.card}>
      {data.guest_favorite && <span className={styles.badge}>Guest Favorite</span>}
      <button
        className={`${styles.button} ${styles.button_like}`}
        onClick={toggleLike}
      >
        {
          data.like
          ? <svg width="22" height="22" viewBox="0 0 24 24" fill="red" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
          : <svg width="22" height="22" viewBox="0 0 24 24" fill="rgb(255 255 255)" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
        }
      </button>
      <Image
        src={data.image.src}
        width={data.image.width}
        height={data.image.height}
        alt={data.image.alt}
        className={styles.card_media}
      />
      <div className={styles.contents}>
        <h1 className={styles.title}>{data.title}</h1>
        <div className={styles.price_container}>
          <span className={styles.price}>{data.price}</span>
          <span className={styles.occurrence}>/{data.occurence}</span>
        </div>
        <p className={styles.text}>{data.subtitle}</p>
      </div>
      <div className={styles.footer}>
        {
          data.ameneties.map((item, index) => (
            <div key={index}>
              {item.icon}
              <span className={styles.label}>{item.label}: </span> <span className={styles.value}>{item.value}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}