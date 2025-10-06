import styles from "./page.module.css";
import React from "react";
import { SwitchViews } from "@/components/2025/week-41/SwtichViews";

export default function Home() {
  return (
    <main className={styles.center}>
      <SwitchViews />
    </main>
  );
}
