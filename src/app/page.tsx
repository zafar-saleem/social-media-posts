import styles from "./page.module.css";
import React from "react";
import { AccountCard } from "@/components/2025/week-42/AccountCard";

export default function Home() {
  return (
    <main className={styles.center}>
      <AccountCard />
    </main>
  );
}
