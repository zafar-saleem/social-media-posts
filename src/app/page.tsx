import { ActivityTracker } from "@/components/2025/week-51/ActivityTracker";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.center}>
      <ActivityTracker />
    </main>
  );
}

