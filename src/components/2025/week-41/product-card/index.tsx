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
      </article>
      <button>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
      </button>
    </div>
  )
}