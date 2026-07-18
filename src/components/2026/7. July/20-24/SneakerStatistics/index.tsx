import styles from "./styles.module.css";
import sneakers from "./assets/sneaker.png";
import Link from "next/link";
import Image from "next/image";

 export const SneakerStatistics = () => {
  return (
    <div className={styles.stats}>
      <span className={styles.stats_pill}>New Arrivals</span>
      <h1 className={styles.stats_title}>Find you perfect sneaker</h1>
      <p className={styles.stats_copy}>
        Discover the latest and most exclusive sneakers from top brands. Whether you're a sneakerhead or just looking for the perfect everyday kicks, we've got you covered. Shop now and step up your style!
      </p>
      <Link href="#" className={styles.stats_button}>
        Explore Shoes
      </Link>
      <Image
        src={sneakers}
        width={1000}
        height={1000}
        alt=""
        className={styles.stats_media}
      />
      <div className={styles.stats_trust}>
        <p className={styles.box}>
          <span>50,000+</span>
          <span>Sneakers Sold</span>
        </p>
        <p className={styles.box}>
          <span>98%</span>
          <span>User Satisfaction</span>
        </p>
        <p className={styles.box}>
          <span>$500K</span>
          <span>Donations Delivered</span>
        </p>
        <p className={styles.box}>
          <span>1M+</span>
          <span>Instagram Followers</span>
        </p>
      </div>
    </div>
  )
 }