import styles from "./page.module.css";
import React from "react";
import { FlightDetails } from "@/components/2025/week-33/flight";

export default function Home() {
  return (
    <main className={styles.center}>
      <FlightDetails />
    </main>
  );
}
