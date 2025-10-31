import styles from "./page.module.css";
import React from "react";
import { Notes } from "@/components/2025/week-45/Notes";
import { MegaMenu } from "@/components/2025/week-45/MegaMenu";

export default function Home() {
  return (
    <main className={styles.center}>
      <MegaMenu />
    </main>
  );
}
