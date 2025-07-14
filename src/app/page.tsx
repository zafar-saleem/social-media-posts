import { GridBento } from "@/components/2025/week-30/bento";
import styles from "./page.module.css";
import React from "react";

export default function Home() {
  return (
    <main className={styles.center}>
      <GridBento />
    </main>
  );
}
