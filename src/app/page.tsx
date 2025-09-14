import styles from "./page.module.css";
import React from "react";
import { Disclosure } from "@/components/2025/week-38/disclosure";

export default function Home() {
  return (
    <main className={styles.center}>
      <Disclosure />
    </main>
  );
}
