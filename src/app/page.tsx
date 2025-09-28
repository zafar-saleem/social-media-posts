import styles from "./page.module.css";
import React from "react";
import { BillsPayments } from "@/components/2025/week-40/bill-payments";

export default function Home() {
  return (
    <main className={styles.center}>
      <BillsPayments />
    </main>
  );
}
