import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

// https://images.pexels.com/photos/5006535/pexels-photo-5006535.jpeg

export const TravelCard = () => {
  return (
    <figure className={styles.card_travel}>
      <Image
        src="https://images.pexels.com/photos/5006535/pexels-photo-5006535.jpeg"
        alt=""
        width={`200`}
        height={`200`}
        className={styles.card_media}
      />
      <figcaption className={styles.card_details}>
        <div className={styles.card_box}>
          <h1 className={styles.card_title}>Jungle Villa Retreat</h1>
          <div className={styles.card_ratings}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="rgb(255 185 3)" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
            <span className={styles.ratings_label}>4.9</span>
            <span className={styles.ratings_total}>(789)</span>
          </div>
        </div>


        <div className={styles.card_location}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(255 254 244)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pinned-icon lucide-map-pinned"><path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"/><circle cx="12" cy="8" r="2"/><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"/></svg>
          <span className={styles.location_label}>Ubud</span>
        </div>

        <p className={styles.card_description}>
          Wake up in lush jungle calm. Private villas surrounded by emerald rice terraces.
        </p>


        <div className={styles.card_tags}>
          <span className={styles.tag}>Wellness</span>
          <span className={styles.tag}>Nature</span>
        </div>




        <div className={styles.control}>
          <div className={styles.card_price}>
            <span className={styles.price}>$110</span> / <span className={styles.occurence}>night</span>
          </div>
          <Link href="#" className={styles.button}>
            <span className={styles.button_label}>View Details</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(74 74 74)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
          </Link>
        </div>
      </figcaption>
    </figure>
  )
}