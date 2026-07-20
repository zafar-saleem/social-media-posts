import Image from "next/image";
import styles from "./styles.module.css";

export const RealEstateCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card_geo}>
        <span className={`${styles.card_pill} ${styles.card_location}`}>Venice 🇮🇹</span>
        <span className={`${styles.card_pill} ${styles.card_availability}`}>Aug 19-22 3 nights</span>
      </div>
      <Image
        src="https://images.pexels.com/photos/10647324/pexels-photo-10647324.jpeg"
        width={2500}
        height={2500}
        alt=""
        className={styles.card_media}
      />
      <div className={styles.card_info}>
        <h1 className={styles.card_title}>Duomo Light Apartment</h1>
        <span className={styles.card_price}>
          <b>$90</b>/<span>night</span>
        </span>
        <div className={styles.card_ameneties}>
          <section>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(161 157 155)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
            <span>2</span>
          </section>

          <section>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(161 157 155)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bed-double-icon lucide-bed-double"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M12 4v6"/><path d="M2 18h20"/></svg>
            <span>1</span>
          </section>

          <section>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(161 157 155)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bath-icon lucide-bath"><path d="M10 4 8 6"/><path d="M17 19v2"/><path d="M2 12h20"/><path d="M7 19v2"/><path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/></svg>
            <span>2</span>
          </section>
        </div>
      </div>
    </div>
  )
}