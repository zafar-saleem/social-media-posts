import styles from "./page.module.css";
import React from "react";
import { Form } from "@/components/2025/week-34/form";
import { SummaryTask } from "@/components/2025/week-35/summery-task";

export default function Home() {
  return (
    <main className={styles.center}>
      <SummaryTask />
    </main>
  );
}
