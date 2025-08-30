import styles from "./page.module.css";
import React from "react";
import { TimePicker } from "@/components/2025/week-36/time-picker";

export default function Home() {
  return (
    <main className={styles.center}>
      <TimePicker />
    </main>
  );
}
