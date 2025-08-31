import styles from "./page.module.css";
import React from "react";
import { CoffeePicker } from "@/components/2025/week-36/coffee-picker";

export default function Home() {
  return (
    <main className={styles.center}>
      <CoffeePicker />
    </main>
  );
}
