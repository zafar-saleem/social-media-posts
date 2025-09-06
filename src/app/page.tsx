import styles from "./page.module.css";
import React from "react";
import { PrivacySettings } from "@/components/2025/week-37/privacy-settings";

export default function Home() {
  return (
    <main className={styles.center}>
      <PrivacySettings />
    </main>
  );
}
