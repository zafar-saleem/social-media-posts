import styles from "./page.module.css";
import React from "react";
import { Notification } from "@/components/2025/week-32/notification";

export default function Home() {
  return (
    <main className={styles.center}>
      <Notification />
    </main>
  );
}
