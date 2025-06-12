import { AccountSetup } from "@/components/account-setup";
import styles from "./page.module.css";
import React from "react";

export default function Home() {
  return (
    <main className={styles.center}>
      <AccountSetup />
    </main>
  );
}
