import { PropertyListing } from "@/components/2025/week49/RealEstate";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.center}>
      <PropertyListing />
    </main>
  );
}

