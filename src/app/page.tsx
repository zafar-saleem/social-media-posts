import styles from "./page.module.css";
import { RealEstateCard } from "@/components/2026/1.jan/19-24/RealEstateCard";

export default function Home() {
  return (
    <main className={styles.center}>
      <RealEstateCard />
    </main>
  );
}
