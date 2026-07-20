import styles from "./styles.module.css";
import Product_O from "./images/1.png";
import Product_G from "./images/2.png";
import Product_B from "./images/3.png";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const ProductCategory = () => {
  return (
    <div className={`${styles.product} ${inter.variable}`}>
      <h1 className={styles.product_title}>Find your SPF Match</h1>
      <ProductCard
        photo={Product_O}
        title="SOLAIA Daily Glow"
        copy="Protects against UVA + UVB rays while hydrating and leaving your skin radiant."
        rating={182}
        new_price={18.00}
        old_price={30.00}
      />
      <ProductCard
        photo={Product_G}
        title="KAIROS Sports Shield"
        copy="Broad-spectrum SPF 50 keeps your skin safe while you run, bike, swim, or play under the sun."
        rating={122}
        new_price={34.00}
        old_price={42.00}
      />
      <ProductCard
        photo={Product_B}
        title="ALBA Mineral Touch"
        copy="Provide strong UV protection while calming and nourishing your skin with natural extracts."
        rating={142}
        new_price={24.00}
        old_price={32.00}
      />
    </div>
  )
}

const ProductCard = ({ ...props }) => {
  return (
    <figure className={styles.product_photo}>
      <Image
        src={props.photo}
        width={500}
        height={500}
        alt=""
      />
      <figcaption className={styles.photo_caption}>
        <div className={styles.caption_rating}>
          <div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="gold" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="gold" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="gold" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="gold" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="gold" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
          </div>
          <span>{props.rating} reviews</span>
        </div>
        <h2 className={styles.caption_title}>{props.title}</h2>
        <div className={styles.caption_price}>
          <span className={styles.new_price}>${props.new_price}.00</span>
          <span className={styles.old_price}>${props.old_price}.00</span>
        </div>
        <p className={styles.caption_copy}>{props.copy}</p>
        <Link href={`#`} className={styles.caption_link}>Detail View</Link>
      </figcaption>
    </figure>
  )
}