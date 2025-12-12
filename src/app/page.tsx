import styles from "./page.module.css";
import { MirrorButton } from "@/components/2025/week-51/Button";

export default function Home() {
  return (
    <main className={styles.center}>
      <MirrorButton />
    </main>
  );
}

