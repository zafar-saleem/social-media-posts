"use client"

import { SwitchAccount } from "@/components/switch-account";
import styles from "./page.module.css";
import React from "react";

export default function Home() {
  return (
    <main className={styles.center}>
      <SwitchAccount />
    </main>
  );
}
