import styles from "./page.module.css";
import { StatusBoard } from "@/components/2026/2. Feb/09-13/StatusBoard";

export default function Home() {
  return (
    <main className={styles.center}>
      <StatusBoard />
    </main>
  );
}
