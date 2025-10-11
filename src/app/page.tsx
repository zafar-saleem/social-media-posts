import styles from "./page.module.css";
import React from "react";
import { Widget } from "@/components/2025/week-42/Widget";

export default function Home() {
  return (
    <main className={styles.center}>
      <Widget />
    </main>
  );
}
