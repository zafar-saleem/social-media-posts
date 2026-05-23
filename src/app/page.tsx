import styles from "./page.module.css";
import { DonationCard } from "@/components/2026/5. May/25-29/DonationCard";

export default function Home() {
  return (
    <main className={styles.center}>
      <DonationCard />
    </main>
  );
}
