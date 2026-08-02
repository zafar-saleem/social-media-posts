import { CreditRange } from "@/components/345-credit-range";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.center}>
      <CreditRange />
    </main>
  );
}
