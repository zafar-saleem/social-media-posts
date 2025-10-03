import styles from "./page.module.css";
import React from "react";
import { Filter } from "@/components/2025/week-41/filter";

export default function Home() {
  return (
    <main className={styles.center}>
      <Filter />
    </main>
  );
}
