import { FlightStatus } from "@/components/2026/1.jan/12-16/FlightStatus";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.center}>
      <FlightStatus />
    </main>
  );
}
