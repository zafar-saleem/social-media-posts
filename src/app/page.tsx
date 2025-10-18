import styles from "./page.module.css";
import React from "react";
import { StepIndicators } from "@/components/2025/week-44/StepIndicators";

export default function Home() {
  return (
    <main className={styles.center}>
      <StepIndicators />
    </main>
  );
}
