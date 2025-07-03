import styles from "./page.module.css";
import React from "react";
import { RecentWorkCard } from "@/components/cards/work";

export default function Home() {
  return (
    <main className={styles.center}>
      <RecentWorkCard />
    </main>
  );
}
