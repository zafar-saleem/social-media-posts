import styles from "./page.module.css";
import { HabitsWidget } from "@/components/2026/4. Apr/06-10/HabitsWidget";

export default function Home() {
  return (
    <main className={styles.center}>
      <HabitsWidget />
    </main>
  );
}
