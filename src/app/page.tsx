import styles from "./page.module.css";
import React from "react";
import { Destructor } from "@/components/2025/week-39/destructor";

export default function Home() {
  return (
    <main className={styles.center}>
      <Destructor />
    </main>
  );
}
