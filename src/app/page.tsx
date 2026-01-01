import styles from "./page.module.css";
import { Wishlist } from "@/components/2026/1.jan/5-9/Wishlist";

export default function Home() {
  return (
    <main className={styles.center}>
      <Wishlist />
    </main>
  );
}
