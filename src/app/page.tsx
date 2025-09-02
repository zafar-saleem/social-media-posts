import styles from "./page.module.css";
import React from "react";
import { TaskMind } from "@/components/2025/week-36/task-mind";

export default function Home() {
  return (
    <main className={styles.center}>
      <TaskMind />
    </main>
  );
}
