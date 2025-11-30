import styles from "./page.module.css";
import { SupportButton } from "@/components/2025/week49/SupportButton";

export default function Home() {
  return (
    <main className={styles.center}>
      <SupportButton />
    </main>
  );
}

