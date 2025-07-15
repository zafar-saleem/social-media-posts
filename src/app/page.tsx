import styles from "./page.module.css";
import React from "react";
import { Onboarding } from "@/components/Jul-14-18-2025/onboarding";

export default function Home() {
  return (
    <main className={styles.center}>
      <Onboarding />
    </main>
  );
}
