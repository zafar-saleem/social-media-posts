import styles from "./page.module.css";
import React from "react";
import { CRMStates } from "@/components/crm-states";

export default function Home() {
  return (
    <main className={styles.center}>
      <CRMStates />
    </main>
  );
}
