"use client"

import { Reaction } from "@/components/buttons/reaction";
import styles from "./page.module.css";
import React from "react";

export default function Home() {
  return (
    <main className={styles.center}>
      {/* <MegaMenu /> */}
      <Reaction />
    </main>
  );
}
