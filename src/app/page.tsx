import styles from "./page.module.css";
import React from "react";
import { TaskOverview } from "@/components/task-overview";

export default function Home() {
  return (
    <main className={styles.center}>
      <TaskOverview />
    </main>
  );
}
