import styles from "./page.module.css";
import { BestCardWidget } from "@/components/2026/5. May/18-22/BestCardsWidget";

export default function Home() {
  return (
    <main className={styles.center}>
      <BestCardWidget />
    </main>
  );
}
