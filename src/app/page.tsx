import styles from "./page.module.css";
import React from "react";
import { StatusTracker } from "@/components/2025/week-41/StatusTracker";

export default function Home() {
  return (
    <main className={styles.center}>
      <StatusTracker />
    </main>
  );
}
