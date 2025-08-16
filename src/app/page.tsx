import styles from "./page.module.css";
import React from "react";
import { Checkout } from "@/components/2025/week-34/checkout";

export default function Home() {
  return (
    <main className={styles.center}>
      <Checkout />
    </main>
  );
}
