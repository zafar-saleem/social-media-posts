import styles from "./page.module.css";
import { ProductListing } from "@/components/2025/week-50/ProductListing";

export default function Home() {
  return (
    <main className={styles.center}>
      <ProductListing />
    </main>
  );
}

