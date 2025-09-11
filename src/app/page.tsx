import styles from "./page.module.css";
import React from "react";
import { Toggle } from "@/components/2025/week-38/toggle";

export default function Home() {
  return (
    <main className={styles.center}>
      <Toggle />
    </main>
  );
}
