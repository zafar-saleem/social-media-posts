import styles from "./page.module.css";
import React from "react";
import { ProfileCard } from "@/components/2025/week-31/profile-card";

export default function Home() {
  return (
    <main className={styles.center}>
      <ProfileCard />
    </main>
  );
}
