import styles from "./page.module.css";
import { CarRentalBooking } from "@/components/2026/6. June/29-30/CarRentalBooking";

export default function Home() {
  return (
    <main className={styles.center}>
      <CarRentalBooking />
    </main>
  );
}
