import styles from "./page.module.css";
import React from "react";
import { TeamManagement } from "@/components/2025/week-46/TeamManagement";

export default function Home() {
  return (
    <main className={styles.center}>
      <TeamManagement />
    </main>
  );
}
