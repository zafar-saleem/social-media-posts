import styles from "./page.module.css";
import { SavedItems } from "@/components/2026/6. June/29-30/SavedItems";

export default function Home() {
  return (
    <main className={styles.center}>
      <SavedItems />
    </main>
  );
}
