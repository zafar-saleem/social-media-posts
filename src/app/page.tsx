import styles from "./page.module.css";
import React from "react";
import { SummaryTask } from "@/components/2025/week-34/summery-task";
import { CTA } from "@/components/2025/week-35/cta";

export default function Home() {
  return (
    <main className={styles.center}>
      <CTA />
    </main>
  );
}
