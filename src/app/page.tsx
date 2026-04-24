import styles from "./page.module.css";
import { AIRealEstateFilter } from "@/components/2026/4. Apr/27-30/AIRealEstateFilter";

export default function Home() {
  return (
    <main className={styles.center}>
      <AIRealEstateFilter />
    </main>
  );
}
