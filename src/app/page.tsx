import styles from "./page.module.css";
import React from "react";
import { AdditionalAction } from "@/components/2025/week-39/additional-actions";

export default function Home() {
  return (
    <main className={styles.center}>
      <AdditionalAction />
    </main>
  );
}
