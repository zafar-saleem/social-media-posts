import styles from "./page.module.css";
import { PlaceOrder } from "@/components/2026/2. Feb/23-28/PlaceOrder";

export default function Home() {
  return (
    <main className={styles.center}>
      <PlaceOrder />
    </main>
  );
}
