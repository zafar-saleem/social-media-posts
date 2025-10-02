import styles from "./page.module.css";
import React from "react";
import { WeeklyFitnessTracker } from "@/components/2025/week-41/FitnessTracker";

export default function Home() {
  return (
    <main className={styles.center}>
      <WeeklyFitnessTracker />
    </main>
  );
}
