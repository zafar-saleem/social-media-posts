import styles from "./page.module.css";
import { TravelCard } from "@/components/2026/1.jan/5-9/TravelCard";

export default function Home() {
  return (
    <main className={styles.center}>
      <TravelCard />
    </main>
  );
}
