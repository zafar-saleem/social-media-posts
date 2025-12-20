"use client";

import styles from "./styles.module.css";
import { useParams } from "next/navigation";
import { useProductCategory } from "../ProductCategoryFilter/store";
import Image from "next/image";
import Link from "next/link";
import { PageTitle } from "../ProductCategoryFilter";

export const ProductDetails = () => {
  const {slug} = useParams();
  const product = useProductCategory((state) => state.data).filter(product => {
    if (product.id === Number(slug)) {
      return product;
    }
  })[0];

  return (
    <section className={styles.container}>
      <PageTitle title="Apparel Collection" />
      <ProductCarousel images={product.images} />
      <ProductInfo product={product} />
      <ProductDescriptions
        overview={product.overview}
        specs={product.specs}
        reviews={product.reviews_list}
      />
      <SimilarProducts similar={product.similar_products} />
    </section>
  )
}

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
            <span>{product.name}</span>
            <span className={styles.product_price}>{product.currency}{product.price}</span>
          </Link>
        ))
      }
    </div>
  )
}

export const ProductDescriptions = ({ overview, specs, reviews }) => {
  return (
    <div className={styles.product_details}>
      <label className={styles.tab_overview}>
        <input type="radio" name="product_desc" className={styles.tab_button} defaultChecked />
        <span className={styles.tab_text}>Overview</span>
      </label>
      <label className={styles.tab_specs}>
        <input type="radio" name="product_desc" className={styles.tab_button} />
        <span className={styles.tab_text}>Specifications</span>
      </label>
      <label className={styles.tab_reviews}>
        <input type="radio" name="product_desc" className={styles.tab_button} />
        <span className={styles.tab_text}>Reviews</span>
      </label>
      <p className={`${styles.tab_desc} ${styles.tab_overview}`}>{overview}</p>
      <p className={`${styles.tab_desc} ${styles.tab_specs}`}>{specs}</p>
      <div className={`${styles.tab_desc} ${`${styles.tab_reviews}`}`}>
        {
          reviews.map((item, index) => (
            <div key={index}>
              <p className={styles.review_text}>{item.text}</p>
              <span className={styles.review_author}>{item.author}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export const ProductInfo = ({ product }) => {
  return (
    <div className={styles.product_info}>
      <h1 className={styles.product_title}>{product.name}</h1>
      <div className={styles.product_reviews}>
        <span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(255 193 7)" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(255 193 7)" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(255 193 7)" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(255 193 7)" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(234 234 234)" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
        </span>
        <span className={styles.reviews_text}>{product.reviews.metrics} {product.reviews.label}</span>
      </div>


      <span className={styles.product_price}>{product.currency}{product.price}</span>
      <p className={styles.product_overview}>{product.brief_desc}</p>

      <div className={styles.product_colors}>
        <h3 className={styles.section_title}>Colors</h3>
        {
          product.colors.map((color, index) => (
            <label className={styles.product_color} key={index} style={{ "--product-color": color }}>
              <input type="radio" name="color" defaultChecked={index === 0 ? true : false} />
            </label>
          ))
        }
      </div>
      
      <div className={styles.product_sizes}>
        <h3 className={styles.section_title}>Size</h3>
        {
          product.sizes.map((size, index) => (
            <label className={styles.product_size} key={index}>
              <input type="radio" name="size" defaultChecked={index === 0 ? true : false} />
              <span>{size}</span>
            </label>
          ))
        }
      </div>

      <div className={styles.controls}>
        <button className={`${styles.button} ${styles.add_button}`}>
          <span className={styles.button_text}>Add to Cart</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(192 192 192)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
        </button>
        
        <button className={`${styles.button} ${styles.buy_now_button}`}>
          <span className={styles.button_text}>Buy It Now</span>
        </button>
        
        <button className={`${styles.button} ${styles.bookmark_button}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(17 17 17)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
        </button>
      </div>

      <p className={styles.misc_info}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(62 62 62)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package-icon lucide-package"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/></svg>
        Free deliver on order over $99.
      </p>
    </div>
  )
}

export const ProductCarousel = ({ images }) => {
  return (
    <div className={styles.product_images}>
      <div className={styles.product_image}>
        {
          images.map(image => (
            <div key={image.id} className={`${styles[image.class]}`}>
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
                className={styles.main_image}
              />
            </div>
          ))
        }
      </div>
      <div className={styles.images_list}>
        {
          images.map(image => (
            <label key={image.id} className={styles.image_label}>
              <input
                type="radio"
                name="image"
                className={`${styles[image.class]} ${styles.image_picker}`}
                defaultChecked={image.id === 1 ? true : false}
              />
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
                className={styles.image_list}
              />
            </label>
          ))
        }
      </div>
    </div>
  )
}