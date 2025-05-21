"use client"

import { Membership } from "@/components/membership";
import styles from "./page.module.css";
import React from "react";

export default function Home() {
  return (
    <main className={styles.center}>
      <Membership />
    </main>
  );
}
