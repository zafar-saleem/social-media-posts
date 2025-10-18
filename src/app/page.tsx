import styles from "./page.module.css";
import React from "react";
import { BookingCard } from "@/components/2025/week-43/booking-card";

export default function Home() {
  return (
    <main className={styles.center}>
      <BookingCard />
    </main>
  );
}
