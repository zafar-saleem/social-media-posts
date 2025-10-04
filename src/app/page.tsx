import styles from "./page.module.css";
import React from "react";
import { ProductCard } from "@/components/2025/week-41/product-card";
import { TOB } from "@/components/2025/week-41/tob";

export default function Home() {
  return (
    <main className={styles.center}>
      <TOB />
    </main>
  );
}
