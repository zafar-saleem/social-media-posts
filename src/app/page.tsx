import styles from "./page.module.css";
import React from "react";
import { Services } from "@/components/2025/week-40/services";

export default function Home() {
  return (
    <main className={styles.center}>
      <Services />
    </main>
  );
}
