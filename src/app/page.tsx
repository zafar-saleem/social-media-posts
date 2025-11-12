import styles from "./page.module.css";
import { ContextMenu } from "@/components/2025/week-47/ContextMenu";

export default function Home() {
  return (
    <main className={styles.center}>
      <ContextMenu />
    </main>
  );
}
