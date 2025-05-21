"use client"

import { ActivityFeed } from "@/components/feed";
import styles from "./page.module.css";
import React from "react";

export default function Home() {
  return (
    <main className={styles.center}>
      <ActivityFeed />
    </main>
  );
}
