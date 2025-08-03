import styles from "./page.module.css";
import React from "react";
import { Menu } from "@/components/2025/week-32/menu";

export default function Home() {
  return (
    <main className={styles.center}>
      <Menu />
    </main>
  );
}
