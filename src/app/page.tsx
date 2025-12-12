import styles from "./page.module.css";
import { AnonimoCard } from "@/components/2025/week-51/AnonimoCard";

export default function Home() {
  return (
    <main className={styles.center}>
      <AnonimoCard />
    </main>
  );
}

