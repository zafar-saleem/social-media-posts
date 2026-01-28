import styles from "./page.module.css";
import { Booking } from "@/components/2026/1.jan/26-30/Booking";

export default function Home() {
  return (
    <main className={styles.center}>
      <Booking />
    </main>
  );
}
