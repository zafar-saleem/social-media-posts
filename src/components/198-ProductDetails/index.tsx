"use client";

import styles from "./styles.module.css";
import { useParams } from "next/navigation";
import { useProductCategory } from "../ProductCategoryFilter/store";
import { PageTitle } from "../ProductCategoryFilter";
import { ProductDescriptions } from "./components/ProductDescription";
import { SimilarProducts } from "./components/SimilarProducts";
import { ProductInfo } from "./components/ProductInfo";
import { ProductCarousel } from "./components/ProductCarousel";

export const ProductDetails = () => {
  const {slug} = useParams();
  const product = useProductCategory((state) => state.data).filter(product => {
    if (product.id === Number(slug)) {
      return product;
    }
  })[0];

  return (
    <>
      <PageTitle title="Apparel Collection" />    
      <section className={styles.container}>
        <ProductCarousel images={product.images} />
        <ProductInfo product={product} />
        <ProductDescriptions
          overview={product.overview}
          specs={product.specs}
          reviews={product.reviews_list}
        />
        <SimilarProducts similar={product.similar_products} />
      </section>
    </>
  )
}
