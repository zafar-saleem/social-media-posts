import styles from "./page.module.css";
import { MultiActionDropdown } from "@/components/2026/4. Apr/13-17/MultiActionMenu";

export default function Home() {
  return (
    <main className={styles.center}>
      <MultiActionDropdown />
    </main>
  );
}
