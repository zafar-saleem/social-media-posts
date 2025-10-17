import styles from "./page.module.css";
import React from "react";
import { ExpandableMore } from "@/components/2025/week-44/ExpandMore";

export default function Home() {
  return (
    <main className={styles.center}>
      <ExpandableMore />
    </main>
  );
}
