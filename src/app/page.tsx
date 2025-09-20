import styles from "./page.module.css";
import React from "react";
import { ExpandingCards } from "@/components/2025/week-39/expanding-cards";

export default function Home() {
  return (
    <main className={styles.center}>
      <ExpandingCards />
    </main>
  );
}
