import styles from "./page.module.css";
import React from "react";
import { AddPaymentMethod } from "@/components/2025/week-34/payment";

export default function Home() {
  return (
    <main className={styles.center}>
      <AddPaymentMethod />
    </main>
  );
}
