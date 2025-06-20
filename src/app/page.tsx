import styles from "./page.module.css";
import React from "react";
import { Statistics } from "@/components/statistics";

export default function Home() {
  return (
    <main className={styles.center}>
      <Statistics />
    </main>
  );
}
