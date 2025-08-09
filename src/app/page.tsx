import styles from "./page.module.css";
import React from "react";
import { AddTask } from "@/components/2025/week-33/task";

export default function Home() {
  return (
    <main className={styles.center}>
      <AddTask />
    </main>
  );
}
