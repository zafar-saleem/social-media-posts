import styles from "./page.module.css";
import React from "react";
import { ActionBar } from "@/components/2025/week-42/ActionBar";

export default function Home() {
  return (
    <main className={styles.center}>
      <ActionBar />
    </main>
  );
}
