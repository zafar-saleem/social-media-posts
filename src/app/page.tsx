import styles from "./page.module.css";
import { PricingCard } from "@/components/2026/4. Apr/20-24/PricingCard";

export default function Home() {
  return (
    <main className={styles.center}>
      <PricingCard />
    </main>
  );
}
