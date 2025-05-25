"use client"

import { FAQ } from "@/components/faq";
import styles from "./page.module.css";
import React from "react";

export default function Home() {
  return (
    <main className={styles.center}>
      <FAQ />
    </main>
  );
}
