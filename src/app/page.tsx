import styles from "./page.module.css";
import React from "react";
import { MultiStateButton } from "@/components/2025/week-38/multi-state-button";

export default function Home() {
  return (
    <main className={styles.center}>
      <MultiStateButton />
    </main>
  );
}
