import styles from "./page.module.css";
import React from "react";
import { ExpandableTooltip } from "@/components/2025/week-40/expandable-tooltip";

export default function Home() {
  return (
    <main className={styles.center}>
      <ExpandableTooltip />
    </main>
  );
}
