import styles from "./page.module.css";
import React from "react";
import { Pricing } from "@/components/2025/week-35/pricing";

export default function Home() {
  return (
    <main className={styles.center}>
      <Pricing />
    </main>
  );
}
