import styles from "./page.module.css";
import React from "react";
import { FitnessWeekReview } from "@/components/2025/week-40/fitness-review";

export default function Home() {
  return (
    <main className={styles.center}>
      <FitnessWeekReview />
    </main>
  );
}
