import styles from "./page.module.css";
import { LiveSearch } from "@/components/2025/week-50/LiveSearch";

export default function Home() {
  return (
    <main className={styles.center}>
      <LiveSearch />
    </main>
  );
}

