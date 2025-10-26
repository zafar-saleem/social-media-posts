import styles from "./page.module.css";
import React from "react";
import { PaymentProcess } from "@/components/2025/week-44/PaymentProcess";

export default function Home() {
  return (
    <main className={styles.center}>
      <PaymentProcess />
    </main>
  );
}
