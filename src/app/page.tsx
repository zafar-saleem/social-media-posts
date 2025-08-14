import styles from "./page.module.css";
import React from "react";
import { Intergrations } from "@/components/2025/week-33/integrations";

export default function Home() {
  return (
    <main className={styles.center}>
      <Intergrations />
    </main>
  );
}
