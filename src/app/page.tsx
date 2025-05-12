"use client"

import styles from "./page.module.css";
import React from "react";
import { Settings } from "@/components/settings";

export default function Home() {
  return (
    <main className={styles.center}>
      {/* <MegaMenu /> */}
      <Settings />
    </main>
  );
}
