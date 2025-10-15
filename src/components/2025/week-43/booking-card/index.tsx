import Image from "next/image";
import styles from "./booking.module.css";

export const BookingCard = () => {
  return (
    <section className={styles.card}>
      <section className={styles.header}>
        <h1 className={styles.title}>Palm Serenity</h1>
        <span className={styles.badge}>Top rated</span>
      </section>
      <p className={styles.description}>
        Tropical villa surrounded by rice fields, featuring an open living space and infinity pool.
      </p>
      <section className={styles.tags}>
        <span className={styles.tag}>Bali</span>
        <span className={styles.tag}>Indonesia</span>
      </section>
      <section className={styles.meta}>
        <span>$319 / night</span>
        <button className={styles.button}>
          <span>Book Now</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-arrow-out-up-right-icon lucide-circle-arrow-out-up-right"><path d="M22 12A10 10 0 1 1 12 2"/><path d="M22 2 12 12"/><path d="M16 2h6v6"/></svg>
        </button>
      </section>
      <figure className={styles.media}>
        <Image
          src="https://images.pexels.com/photos/13914273/pexels-photo-13914273.jpeg"
          width={100}
          height={100}
          alt=""
        />
        <figcaption>
          <section className={styles.inclusions}>
            <span>Pool</span>
            <span>Private beach</span>
          </section>
          <span className={styles.ratings}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
            <span>4.9</span>
          </span>
        </figcaption>
      </figure>
    </section>
  )
}