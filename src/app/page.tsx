import styles from "./page.module.css";
import React from "react";
import { ProductCard } from "@/components/2025/week-41/product-card";

export default function Home() {
  return (
    <main className={styles.center}>
      <ProductCard />
    </main>
  );
}
