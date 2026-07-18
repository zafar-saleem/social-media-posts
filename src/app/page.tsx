import styles from "./page.module.css";
import { Team } from "@/components/2026/7. July/20-24/Team";

export default function Home() {
  return (
    <main className={styles.center}>
      <Team />
    </main>
  );
}
