import styles from "./page.module.css";
import { AirlineSeatSelection } from "@/components/2026/6. June/01-05/AirlineSeatSelection";

export default function Home() {
  return (
    <main className={styles.center}>
      <AirlineSeatSelection />
    </main>
  );
}
