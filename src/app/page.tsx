import styles from "./page.module.css";
import React from "react";
import { ProductBento } from "@/components/cards/bento-product";

export default function Home() {
  return (
    <main className={styles.center}>
      <ProductBento />
    </main>
  );
}
