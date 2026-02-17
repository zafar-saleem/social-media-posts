import styles from "./page.module.css";
import { ShippingTimeEstimation } from "@/components/2026/2. Feb/16-20/ShippingTimeEstimation";

export default function Home() {
  return (
    <main className={styles.center}>
      <ShippingTimeEstimation />
    </main>
  );
}
