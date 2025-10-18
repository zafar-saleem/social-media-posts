import { Notifications } from "@/components/2025/week-43/Notifications";
import styles from "./page.module.css";
import React from "react";

export default function Home() {
  return (
    <main className={styles.center}>
      <Notifications />
    </main>
  );
}
