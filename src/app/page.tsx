import styles from "./page.module.css";
import { MealLogger } from "@/components/2026/2. Feb/02-06/MealLogger";

export default function Home() {
  return (
    <main className={styles.center}>
      <MealLogger />
    </main>
  );
}
