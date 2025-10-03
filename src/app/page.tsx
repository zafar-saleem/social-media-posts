import styles from "./page.module.css";
import React from "react";
import { WeeklyFitnessTracker } from "@/components/2025/week-41/FitnessTracker";
import { Assigned } from "@/components/2025/week-41/assignment";

export default function Home() {
  return (
    <main className={styles.center}>
      <Assigned />
    </main>
  );
}
