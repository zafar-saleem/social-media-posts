import styles from "./page.module.css";
import { TasksList } from "@/components/2026/2. Feb/09-13/TasksList";

export default function Home() {
  return (
    <main className={styles.center}>
      <TasksList />
    </main>
  );
}
