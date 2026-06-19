import styles from "./page.module.css";
import { LiesureActivityCard } from "@/components/2026/6. June/22-26/LiesureActivityCard";

export default function Home() {
  return (
    <main className={styles.center}>
      <LiesureActivityCard />
    </main>
  );
}
