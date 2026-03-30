import styles from "./page.module.css";
import { AvatarsWithTooltips } from "@/components/2026/4. Apr/01-03/AvatarsWithTooltips";

export default function Home() {
  return (
    <main className={styles.center}>
      <AvatarsWithTooltips />
    </main>
  );
}
