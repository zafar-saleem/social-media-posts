import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

export const SimilarProducts = ({ similar }) => {
  return (
    <div className={styles.product_similar}>
      <h2 className={styles.section_title}>Similar Interested Products</h2>
      <p className={styles.section_subtitle}>Who bought this product also purchased products below</p>
      {
        similar.map(product => (
          <Link key={product.id} href={`${product.link_url}${product.id}`} className={styles.similar_container}>
            <Image
              src={product.image.src}
              width={product.image.width}
              height={product.image.height}
              alt={product.image.alt}
            />
            <span className={styles.product_title}>{product.name}</span>
            <span className={styles.product_price}>{product.currency}{product.price}</span>
          </Link>
        ))
      }
    </div>
  )
}
