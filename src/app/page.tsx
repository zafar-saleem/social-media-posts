import styles from "./page.module.css";
import React from "react";
import { Command } from "@/components/command";

export default function Home() {
  return (
    <main className={styles.center}>
      <Command />
    </main>
  );
}
