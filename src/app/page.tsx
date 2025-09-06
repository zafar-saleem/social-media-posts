import styles from "./page.module.css";
import React from "react";
import { ShareProject } from "@/components/2025/week-37/share-project";

export default function Home() {
  return (
    <main className={styles.center}>
      <ShareProject />
    </main>
  );
}
