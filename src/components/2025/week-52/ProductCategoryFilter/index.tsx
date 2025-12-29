"use client";

import { useProductCategory } from "./store";
import styles from "./styles.module.css";
import { Filter } from "./components/Filter";
import { Card } from "./components/Card";
import Link from "next/link";

export const ProductCategory = () => {
  const products = useProductCategory((state) => state.data);

  return (
    <>
      <PageTitle title="Apparel Collection" />
      <Filter products={products} />
      <section className={styles.container}>
        {
          products.map(product => (
            <Card {...product} key={product.id} />
          ))
        }
      </section>
    </>
  )
}

export const PageTitle = ({ title }: any) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.page_title}>{title}</h1>
      <Link className={styles.cart} href="/cart">Cart</Link>
    </header>
  )
}
