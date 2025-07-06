import styles from "./page.module.css";
import React from "react";
import { MentionCard } from "@/components/cards/card-mention";

export default function Home() {
  return (
    <main className={styles.center}>
      <MentionCard />
    </main>
  );
}
