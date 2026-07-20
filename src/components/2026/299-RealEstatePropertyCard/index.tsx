"use client";

import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const CARD_DATA = {
  card_title: "Lakeshore Blvd West",
  card_media: {
    src: "https://images.pexels.com/photos/21297784/pexels-photo-21297784.jpeg",
    width: 3000,
    height: 3000,
    alt: "",
  },
  card_stars: {
    total: 4.8,
    total_reviewers: 20,
  },
  address: "3242 Royal Ln, New Jersey",
  amenities: {
    bedrooms: 3,
    bathrooms: 4,
  },
  size: "3241 Sqft",
  cost: "$240",
  favorite: false,
}

export const RealEstatePropertyCard = () => {
  const [card, setCard] = React.useState(CARD_DATA);

  return (
    <div className={styles.card}>
      <button className={`${styles.card_favorite} ${card.favorite && styles.favorite}`} onClick={() => setCard(() => ({...card, favorite: !card.favorite}))}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(210 210 210)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
      </button>
      <Image
        src={card.card_media.src}
        width={card.card_media.width}
        height={card.card_media.height}
        alt={card.card_media.alt}
        className={styles.card_image}
      />
      <h1 className={styles.card_title}>{card.card_title}</h1>
      <div className={styles.card_reviews}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="rgb(221 164 67)" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
        <span className={styles.card_ratings}>{card.card_stars.total}</span>
        <span className={styles.card_reviewers}>({card.card_stars.total_reviewers})</span>
      </div>




      <p className={styles.card_location}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(75 75 75)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-house-icon lucide-map-pin-house"><path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"/><path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2"/><path d="M18 22v-3"/><circle cx="10" cy="10" r="3"/></svg>
        <span className={styles.card_address}>{card.address}</span>
      </p>

      


      <div className={styles.card_amenities}>
        <div className={styles.group}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(75 75 75)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bed-double-icon lucide-bed-double"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M12 4v6"/><path d="M2 18h20"/></svg>
          <span className={styles.text}>{card.amenities.bedrooms} Bedrooms</span>
        </div>
        <div className={styles.group}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(75 75 75)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bath-icon lucide-bath"><path d="M10 4 8 6"/><path d="M17 19v2"/><path d="M2 12h20"/><path d="M7 19v2"/><path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/></svg>
          <span className={styles.text}>{card.amenities.bathrooms} Bathrooms</span>
        </div>
        <div className={styles.group}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(75 75 75)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-ruler-icon lucide-pencil-ruler"><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"/><path d="m8 6 2-2"/><path d="m18 16 2-2"/><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
          <span className={styles.text}>{card.size}</span>
        </div>
      </div>






      <span className={styles.card_price}>{card.cost} Night</span>
      <button className={styles.button_reserve}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(226 226 226)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-check-icon lucide-book-open-check"><path d="M12 21V7"/><path d="m16 12 2 2 4-4"/><path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"/></svg>
        <span className={styles.button_text}>Reserve</span>
      </button>
    </div>
  )
}