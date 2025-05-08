"use client"

import styles from "./page.module.css";
import React from "react";
import { ButtonsWithState } from "@/components/buttons/state-buttons";

export default function Home() {
  return (
    <main className={styles.center}>
      {/* <MegaMenu /> */}
      <ButtonsWithState />
    </main>
  );
}
