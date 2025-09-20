import styles from "./page.module.css";
import React from "react";
import { FilterDisclosure } from "@/components/2025/week-39/filter-disclosure";

export default function Home() {
  return (
    <main className={styles.center}>
      <FilterDisclosure />
    </main>
  );
}
