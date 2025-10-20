import styles from "./page.module.css";
import React from "react";
import { SeatCounter } from "@/components/2025/week-44/SeatCounter";

export default function Home() {
  return (
    <main className={styles.center}>
      <SeatCounter />
    </main>
  );
}
