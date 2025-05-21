"use client"

import { Ticket } from "@/components/ticket";
import styles from "./page.module.css";
import React from "react";

export default function Home() {
  return (
    <main className={styles.center}>
      <Ticket />
    </main>
  );
}
