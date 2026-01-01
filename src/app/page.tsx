import styles from "./page.module.css";
import { FitnessList } from "@/components/2026/1.jan/5-9/FitnessList";

export default function Home() {
  return (
    <main className={styles.center}>
      <FitnessList />
    </main>
  );
}
