import styles from "./page.module.css";
import { Tabs } from "@/components/2025/week-50/Tabs";

export default function Home() {
  return (
    <main className={styles.center}>
      <Tabs />
    </main>
  );
}

