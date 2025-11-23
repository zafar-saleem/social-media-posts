import styles from "./page.module.css";
import { Tags } from "@/components/2025/week-48/Tags";

export default function Home() {
  return (
    <main className={styles.center}>
      <Tags />
    </main>
  );
}

