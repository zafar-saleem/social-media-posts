import styles from "./page.module.css";
import React from "react";
import { Permissions } from "@/components/2025/week-33/permissions";

export default function Home() {
  return (
    <main className={styles.center}>
      <Permissions />
    </main>
  );
}
