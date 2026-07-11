import styles from "./page.module.css";
import { OverviewWidget } from "@/components/2026/7. July/08-12/OverviewCards";

export default function Home() {
  return (
    <main className={styles.center}>
      <OverviewWidget />
    </main>
  );
}
