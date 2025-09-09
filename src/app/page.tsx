import styles from "./page.module.css";
import React from "react";
import { MultiFilter } from "@/components/2025/week-37/multi-filter";
import { Permissions } from "@/components/2025/week-37/permissions";

export default function Home() {
  return (
    <main className={styles.center}>
      <Permissions />
    </main>
  );
}
