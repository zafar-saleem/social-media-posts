import styles from "./page.module.css";
import React from "react";
import { ButtonSwitch } from "@/components/2025/week-36/switch-button";

export default function Home() {
  return (
    <main className={styles.center}>
      <ButtonSwitch />
    </main>
  );
}
