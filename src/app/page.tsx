import styles from "./page.module.css";
import { StatusChip } from "@/components/2026/3. Mar/23-28/StatusChip";

export default function Home() {
  return (
    <main className={styles.center}>
      <StatusChip />
    </main>
  );
}
