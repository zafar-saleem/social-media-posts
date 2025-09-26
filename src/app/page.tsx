import styles from "./page.module.css";
import React from "react";
import { SignIn } from "@/components/2025/week-40/sign-in";

export default function Home() {
  return (
    <main className={styles.center}>
      <SignIn />
    </main>
  );
}
