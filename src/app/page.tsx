import styles from "./page.module.css";
import React from "react";
import { Preloader } from "@/components/2025/week-43/Preloader";

export default function Home() {
  return (
    <main className={styles.center}>
      <Preloader />
    </main>
  );
}
