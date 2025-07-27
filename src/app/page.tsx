import { NewEvent } from "@/components/2025/week-31/new-event";
import styles from "./page.module.css";
import React from "react";

export default function Home() {
  return (
    <main className={styles.center}>
      <NewEvent />
    </main>
  );
}
