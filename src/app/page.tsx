import styles from "./page.module.css";
import { NetProfitChart } from "@/components/2026/6. June/01-05/NetProfitChart";

export default function Home() {
  return (
    <main className={styles.center}>
      <NetProfitChart />
    </main>
  );
}
