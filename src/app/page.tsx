"use client"

import styles from "./page.module.css";
import React from "react";
import { ProductCard } from "@/components/cards/product";

export default function Home() {
  return (
    <main className={styles.center}>
      {/* <MegaMenu /> */}
      <ProductCard />
    </main>
  );
}
