import styles from "./page.module.css";
import React from "react";
import { UpdateStatus } from "@/components/2025/week-38/update-status";

export default function Home() {
  return (
    <main className={styles.center}>
      <UpdateStatus />
    </main>
  );
}
