import { TaskManagement } from "@/components/2026/1.jan/19-24/TaskManagement";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.center}>
      <TaskManagement />
    </main>
  );
}
