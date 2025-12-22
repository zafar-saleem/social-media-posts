import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

export const Card = ({ ...props }) => {
  return (
    <div className={styles.card} key={props.id}>
      <div className={styles.images}>
        {
          props.images.map((image, index) => (
            <div key={index}>
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt=""
              />
            </div>
          ))
        }
      </div>
      <figure className={styles.product_image}>
        <Image
          src={props.image.src}
          width={props.image.width}
          height={props.image.height}
          alt={props.image.alt}
          className={styles.product_photo}
        />
        <figcaption className={styles.product_caption}>
          <Link href={props.link_url} className={styles.buy_button}>
            <span className={styles.button_label}>Buy it now</span>
            <span className={styles.button_icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#282828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
          </Link>
          <span className={styles.product_price}>{props.currecy}{props.price}</span>
          
        </figcaption>
      </figure>
      
      <div className={styles.info}>
        <Link href={`${props.link_url}${props.id}`}>
          <h1 className={styles.product_name}>{props.name}</h1>
        </Link>
        <div className={styles.product_reviews}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="rgb(255 193 7)" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
          <span className={styles.review_metrics}>{props.reviews.metrics}</span>
          <span className={styles.review_label}>{props.reviews.label}</span>
        </div>
      </div>
      <p className={styles.product_desc}>{props.short_desc}</p>
      <button className={styles.button_cart}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#282828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
      </button>
    </div>
  )
}
