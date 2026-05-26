import styles from "./page.module.css";
import { Ticket } from "@/components/2026/6. June/01-05/Ticket";

export default function Home() {
  return (
    <main className={styles.center}>
      <Ticket />
    </main>
  );
}
