import styles from "./page.module.css";
import { Pricing } from "@/components/2025/week49/Pricing";

export default function Home() {
  return (
    <main className={styles.center}>
      <Pricing />
    </main>
  );
}

