import styles from "./page.module.css";
import React from "react";
import { AutomotiveDetailCard } from "@/components/2025/week-45/AutomotiveCard";

export default function Home() {
  return (
    <main className={styles.center}>
      <AutomotiveDetailCard />
    </main>
  );
}
