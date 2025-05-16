"use client"

import styles from "./page.module.css";
import React from "react";
import { Plan } from "@/components/plan";

export default function Home() {
  return (
    <main className={styles.center}>
      {/* <MegaMenu /> */}
      <Plan />
    </main>
  );
}
