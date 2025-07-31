import styles from "./page.module.css";
import React from "react";
import { Payments } from "@/components/2025/week-31/payments";

export default function Home() {
  return (
    <main className={styles.center}>
      <Payments />
    </main>
  );
}
