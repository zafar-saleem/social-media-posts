import styles from "./page.module.css";
import React from "react";
import { PricingPlan } from "@/components/pricing";

export default function Home() {
  return (
    <main className={styles.center}>
      <PricingPlan />
    </main>
  );
}
