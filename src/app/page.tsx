import styles from "./page.module.css";
import React from "react";
import { Filters } from "@/components/2025/week-42/Filters";

export default function Home() {
  return (
    <main className={styles.center}>
      <Filters />
    </main>
  );
}
