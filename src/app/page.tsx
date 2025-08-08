import styles from "./page.module.css";
import React from "react";
import { PaymentMethods } from "@/components/2025/week-33/payment-methods";

export default function Home() {
  return (
    <main className={styles.center}>
      <PaymentMethods />
    </main>
  );
}
