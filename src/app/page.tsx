import styles from "./page.module.css";
import React from "react";
import { Toasts } from "@/components/2025/week-43/Toasts";

export default function Home() {
  return (
    <main className={styles.center}>
      <Toasts />
    </main>
  );
}
