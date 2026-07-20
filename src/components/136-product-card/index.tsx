import Image from "next/image";
import styles from "./product.module.css";

export const ProductCard = () => {
  return (
    <div className={styles.card}>
      <section className={styles.product}>
        <Image
          src="https://images.stockcake.com/public/9/8/6/9865c075-783d-4c84-a8ee-8a066c67ed2a_large/dirty-trail-sneaker-stockcake.jpg"
          width={100}
          height={100}
          alt=""
          className={styles.media}
        />
        <Image
          src="https://images.stockcake.com/public/7/a/5/7a5dd399-f952-488e-95ea-e9a068a7d22a_large/worn-athletic-sneaker-stockcake.jpg"
          width={100}
          height={100}
          alt=""
          className={styles.media}
        />
        <Image
          src="https://images.stockcake.com/public/7/d/f/7df3a7e8-0e32-49cb-bb62-8d71c104b9d0_large/vintage-sneaker-studio-stockcake.jpg"
          width={100}
          height={100}
          alt=""
          className={styles.media}
        />
      </section>
      <article className={styles.box}>
        <h1 className={styles.title}>Flying Nike</h1>
        <p className={styles.brief}>Best for Running, Sprinting, Walking.</p>
        <section className={styles.ratings}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(255 210 86)" stroke="rgb(255 210 86)" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(255 210 86)" stroke="rgb(255 210 86)" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(255 210 86)" stroke="rgb(255 210 86)" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(255 210 86)" stroke="rgb(255 210 86)" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(255 210 86)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
          <span>5k+ customers trusted</span>
        </section>
      </article>
      <button>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
      </button>
      <span className={styles.basket_tooltip}>Add To Basket</span>
    </div>
  )
}