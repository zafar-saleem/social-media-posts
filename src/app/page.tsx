import styles from "./page.module.css";
import React from "react";
import { NewChannel } from "@/components/2025/week-43/NewChannel";

export default function Home() {
  return (
    <main className={styles.center}>
      <NewChannel />
    </main>
  );
}
