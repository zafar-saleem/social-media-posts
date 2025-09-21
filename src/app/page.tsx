import styles from "./page.module.css";
import React from "react";
import { Invoice } from "@/components/2025/week-39/invoice";

export default function Home() {
  return (
    <main className={styles.center}>
      <Invoice />
    </main>
  );
}
