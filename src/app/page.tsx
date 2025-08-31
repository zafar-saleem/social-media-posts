import styles from "./page.module.css";
import React from "react";
import { SocialMediaCard } from "@/components/2025/week-36/social-card";

export default function Home() {
  return (
    <main className={styles.center}>
      <SocialMediaCard />
    </main>
  );
}
