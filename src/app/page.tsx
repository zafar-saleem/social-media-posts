import styles from "./page.module.css";
import { AboutButton } from "@/components/2026/3. Mar/30-31/ButtonAbout";

export default function Home() {
  return (
    <main className={styles.center}>
      <AboutButton />
    </main>
  );
}
