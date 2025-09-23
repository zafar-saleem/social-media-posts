import styles from "./page.module.css";
import React from "react";
import { TaskTrackerCard } from "@/components/2025/week-40/task-tracker";

export default function Home() {
  return (
    <main className={styles.center}>
      <TaskTrackerCard />
    </main>
  );
}
