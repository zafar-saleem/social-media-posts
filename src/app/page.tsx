import styles from "./page.module.css";
import React from "react";
import { Meeting } from "@/components/meeting";

export default function Home() {
  return (
    <main className={styles.center}>
      <Meeting />
    </main>
  );
}
