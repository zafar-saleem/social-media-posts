import styles from "./page.module.css";
import { UserSelector } from "@/components/2026/2. Feb/02-06/UserSelector";

export default function Home() {
  return (
    <main className={styles.center}>
      <UserSelector />
    </main>
  );
}
