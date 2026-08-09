import styles from "./page.module.css";
import { IOTBreakerPanel } from "@/components/346-IOT-Breaker-Panel";

export default function Home() {
  return (
    <main className={styles.center}>
      <IOTBreakerPanel />
    </main>
  );
}
