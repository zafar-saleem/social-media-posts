import styles from "./page.module.css";
import { TrackingStats } from "@/components/2026/1.jan/26-30/TrackingStats";

export default function Home() {
  return (
    <main className={styles.center}>
      <TrackingStats />
    </main>
  );
}
