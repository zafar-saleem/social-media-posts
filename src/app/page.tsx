import styles from "./page.module.css";
import { MultiFilters } from "@/components/2026/3. Mar/16-20/MultiFilters";

export default function Home() {
  return (
    <main className={styles.center}>
      <MultiFilters />
    </main>
  );
}
