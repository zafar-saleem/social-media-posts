import styles from "./page.module.css";
import React from "react";
import { Blog } from "@/components/2025/week-32/blog";

export default function Home() {
  return (
    <main className={styles.center}>
      <Blog />
    </main>
  );
}
