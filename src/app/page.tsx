import styles from "./page.module.css";
import React from "react";
import { CaseStudies } from "@/components/2025/week-42/CaseStudies";

export default function Home() {
  return (
    <main className={styles.center}>
      <CaseStudies />
    </main>
  );
}
