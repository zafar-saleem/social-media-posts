import styles from "./page.module.css";
import React from "react";
import { ToggleSidebar } from "@/components/2025/week-43/toggle-sidebar";

export default function Home() {
  return (
    <main className={styles.center}>
      <ToggleSidebar />
    </main>
  );
}
