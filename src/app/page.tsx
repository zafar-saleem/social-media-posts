import styles from "./page.module.css";
import React from "react";
import { ActionsList } from "@/components/2025/week-31/actions-list";

export default function Home() {
  return (
    <main className={styles.center}>
      <ActionsList />
    </main>
  );
}
