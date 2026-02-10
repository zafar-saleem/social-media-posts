import { FitnessDayStreak } from "@/components/2026/2. Feb/16-20/FitnessDayStreak";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.center}>
      <FitnessDayStreak />
    </main>
  );
}
