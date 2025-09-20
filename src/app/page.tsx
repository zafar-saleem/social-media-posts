import styles from "./page.module.css";
import React from "react";
import { IntegrationModal } from "@/components/2025/week-39/integration-modal";

export default function Home() {
  return (
    <main className={styles.center}>
      <IntegrationModal />
    </main>
  );
}
