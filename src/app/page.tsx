import styles from "./page.module.css";
import React from "react";
import { TaskMemo } from "@/components/task-memo";

export default function Home() {
  return (
    <main className={styles.center}>
      <TaskMemo />
    </main>
  );
}
