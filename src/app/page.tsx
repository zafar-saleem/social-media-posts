import styles from "./page.module.css";
import { GetInTouchButton } from "@/components/2025/week-51/CTAButton";

export default function Home() {
  return (
    <main className={styles.center}>
      <GetInTouchButton />
    </main>
  );
}

