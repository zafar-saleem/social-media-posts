import styles from "./page.module.css";
import React from "react";
import { ScheduleList } from "@/components/2025/week-46/ScheduleList";

export default function Home() {
  return (
    <main className={styles.center}>
      <ScheduleList />
    </main>
  );
}
