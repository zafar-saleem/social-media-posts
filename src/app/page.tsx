import styles from "./page.module.css";
import React from "react";
import { TrackShipment } from "@/components/2025/week-30/track-shipment";
import { FeatureSection } from "@/components/2025/week-30/feature-section";

export default function Home() {
  return (
    <main className={styles.center}>
      <FeatureSection />
    </main>
  );
}
