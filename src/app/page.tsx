"use client"

import styles from "./page.module.css";
import React from "react";
import { Subscription } from "@/components/subscription";

export default function Home() {
  return (
    <main className={styles.center}>
      {/* <MegaMenu /> */}
      <Subscription />
    </main>
  );
}
