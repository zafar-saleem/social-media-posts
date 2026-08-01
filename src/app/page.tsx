import styles from "./page.module.css";
import { DietSummary } from "@/components/344-diet-summary";

export default function Home() {
  return (
    <main className={styles.center}>
      <DietSummary />
    </main>
  );
}
