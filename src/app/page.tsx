import styles from "./page.module.css";
import React from "react";
import { IntegratePlatforms } from "@/components/2025/week-34/integrate-platforms";

export default function Home() {
  return (
    <main className={styles.center}>
      <IntegratePlatforms />
    </main>
  );
}
