import styles from "./page.module.css";
import React from "react";
import { CryptoFilter } from "@/components/2025/week-37/crypto-filter";

export default function Home() {
  return (
    <main className={styles.center}>
      <CryptoFilter />
    </main>
  );
}
