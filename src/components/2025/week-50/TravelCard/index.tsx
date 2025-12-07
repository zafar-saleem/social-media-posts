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
          className={styles.image}
        />
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