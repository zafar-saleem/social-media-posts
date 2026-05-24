import { DeliveryStatus } from "@/components/2026/5. May/25-29/DeliveryStatus";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.center}>
      <DeliveryStatus />
    </main>
  );
}
