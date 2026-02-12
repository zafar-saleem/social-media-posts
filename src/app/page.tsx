import styles from "./page.module.css";
import { FitnessStepCounter } from "@/components/2026/2. Feb/16-20/FitnessStepCounter";

export default function Home() {
  return (
    <main className={styles.center}>
      <FitnessStepCounter />
    </main>
  );
}
