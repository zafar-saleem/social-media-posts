import { DailySteps } from "@/components/2026/1.jan/26-30/DailyMemoCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.center}>
      <DailySteps />
    </main>
  );
}
