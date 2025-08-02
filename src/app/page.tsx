import styles from "./page.module.css";
import React from "react";
import { Billing } from "@/components/2025/week-32/billing";

export default function Home() {
  return (
    <main className={styles.center}>
      <Billing />
    </main>
  );
}
