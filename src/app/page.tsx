import styles from "./page.module.css";
import React from "react";
import { CTAButton } from "@/components/2025/week-43/cta";

export default function Home() {
  return (
    <main className={styles.center}>
      <CTAButton />
    </main>
  );
}
