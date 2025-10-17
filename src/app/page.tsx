import styles from "./page.module.css";
import React from "react";
import { Notifications } from "@/components/2025/week-44/Notifications";

export default function Home() {
  return (
    <main className={styles.center}>
      <Notifications />
    </main>
  );
}
