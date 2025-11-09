import styles from "./page.module.css";
import { WeeklyGoals } from "@/components/2025/week-46/WeeklyGoals";

export default function Home() {
  return (
    <main className={styles.center}>
      <WeeklyGoals />
    </main>
  );
}
