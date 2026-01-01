import { ProductCategory } from "@/components/2025/week-52/ProductCategoryFilter";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.center}>
      <ProductCategory />
    </main>
  );
}
