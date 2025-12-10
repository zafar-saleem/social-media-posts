import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export const TravelCard = () => {
  return (
    <section className={styles.card}>
      <div className={styles.image}>
        <Image
          src="https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg"
          width={500}
          height={500}
          alt=""
        />
        <span className={`${styles.badge} ${styles.property_type}`}>Outdoors</span>
        <button className={`${styles.badge} ${styles.bookmark}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark-icon lucide-bookmark"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
        </button>
        <div className={styles.details}>
          <span className={styles.card_title}>Azure Cove Retreat</span>
          <div className={styles.badges}>
            <span className={`${styles.badge} ${styles.reviews}`}>
              <span>⭐️</span>
              <span>4.7 (285 Reviews)</span>
            </span>
            <span className={`${styles.badge} ${styles.location}`}>
              <span>📍</span>
              <span>Japan</span>
            </span>
          </div>
          <span className={styles.price}>From $40/night</span>
          <Link href="#" className={`button_one`}>
            <span>View </span> <span>Rooms</span>
          </Link>
        </div>
      </div>
    </section>
  )
}