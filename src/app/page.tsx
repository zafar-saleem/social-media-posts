import styles from "./page.module.css";
import { RealEstateFilters } from "@/components/2025/week-47/RealEstateFilter";

export default function Home() {
  return (
    <main className={styles.center}>
      <RealEstateFilters />
    </main>
  );
}
