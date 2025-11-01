import styles from "./page.module.css";
import React from "react";
import { HealthMacros } from "@/components/2025/week-45/HealthMacros";

export default function Home() {
  return (
    <main className={styles.center}>
      <HealthMacros />
    </main>
  );
}
