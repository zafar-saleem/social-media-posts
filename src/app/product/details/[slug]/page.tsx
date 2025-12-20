import { ProductDetails } from "@/components/2025/week-52/ProductDetails";
import styles from "./page.module.css";

export default async function Details() {
  return (
    <main className={styles.container}>
      <ProductDetails />
    </main>
  );
}
