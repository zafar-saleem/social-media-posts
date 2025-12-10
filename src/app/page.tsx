import styles from "./page.module.css";
import { TravelCard } from "@/components/2025/week-50/TravelCard";

export default function Home() {
  return (
    <main className={styles.center}>
      <TravelCard />
    </main>
  );
}

