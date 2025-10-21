import styles from "./page.module.css";
import React from "react";
import { SignUp } from "@/components/2025/week-44/SignUp";

export default function Home() {
  return (
    <main className={styles.center}>
      <SignUp />
    </main>
  );
}
