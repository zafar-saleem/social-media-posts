import Image from "next/image";
import styles from "./bento.module.css";
import cardMedia from "./assets/sun-glasses.png";
import icon from "./assets/shopping-basket.png";
import left_opener from "./assets/left.png";
import right_opener from "./assets/right.png";

export const ProductBento = () => {
  return (
    <div className={styles.product}>
      <Image
        src={cardMedia}
        width={200}
        height={150}
        alt=""
        className={styles.product_media}
      />
      <article className={styles.product_contents}>
        <div className={styles.product_title_container}>
          <span className={styles.product_title}>Style Meets Protection</span>
          <span className={styles.product_price}>$16.99</span>
        </div>
        <p>
          Discover sunglasses designed to shield your eyes and elevate your look -- whereever the sun takes you.
        </p>
        <div className={styles.product_action}>
          <button>View Details</button>
          <button>
            <span>Shop Now</span>
            <span>
              <Image
                src={left_opener}
                width={3}
                height={5}
                alt=""
                className={styles.left}
              />
              <Image
                src={icon}
                width={15}
                height={15}
                alt=""
              />
              <Image
                src={right_opener}
                width={3}
                height={5}
                alt=""
                className={styles.right}
              />
            </span>

          </button>
        </div>
      </article>
    </div>
  )
}