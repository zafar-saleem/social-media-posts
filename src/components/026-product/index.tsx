import Image from "next/image";
import styles from "./product.module.css";
import bag from "./assets/wrist-watch.avif";
import pepsi from "./assets/beverage.avif";

export const ProductCard = () => {
  return (
    <div className={styles.product_container}>
      <div className={`${styles.product_vinta} ${styles.product}`}>
        <h1 className={styles.product_title}>IWC Watch</h1>
        <h2 className={styles.product_subtitle}>M32</h2>
        <p className={styles.product_content}>
          Lorem ipsum dolor sit amet consectetur.
          Adipisicing elit.
        </p>
        <div className={styles.product_image_container}>
          <Image
            className={styles.product_image}
            src={bag}
            alt=""
            width={400}
            height={300}
          />
        </div>
      </div>

      <div className={`${styles.product_beverage} ${styles.product}`}>
        <h1 className={styles.product_title}>Coca Cola</h1>
        <h2 className={styles.product_subtitle}>Zero Sugar</h2>
        <p className={styles.product_content}>
          Lorem ipsum dolor sit amet consectetur.
          Adipisicing elit.
        </p>
        <div className={styles.product_image_container}>
          <Image
            className={styles.product_image}
            src={pepsi}
            alt=""
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  )
}