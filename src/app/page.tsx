import styles from "./page.module.css";
import { TrafficAnalytics } from "@/components/2026/3. Mar/02-06/TrafficAnalytics";

export default function Home() {
  return (
    <main className={styles.center}>
      <TrafficAnalytics />
    </main>
  );
}
