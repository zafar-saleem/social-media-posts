"use client"

import styles from "./page.module.css";
import React from "react";
import { WildCard } from "@/components/cards/wild-card";

export default function Home() {
  return (
    <main className={styles.center}>
      <WildCard />
    </main>
  );
}
