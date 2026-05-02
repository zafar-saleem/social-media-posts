import styles from "./page.module.css";
import { SelectionList } from "@/components/2026/5. May/03-08/SelectionList";

export default function Home() {
  return (
    <main className={styles.center}>
      <SelectionList />
    </main>
  );
}
