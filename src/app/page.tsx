import styles from "./page.module.css";
import React from "react";
import { Actions } from "@/components/2025/week-31/row-level-actions";

export default function Home() {
  return (
    <main className={styles.center}>
      <Actions />
    </main>
  );
}
