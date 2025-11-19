import styles from "./page.module.css";
import { ProfileCompletenessRing } from "@/components/2025/week-48/ProfileRing";

export default function Home() {
  return (
    <main className={styles.center}>
      <ProfileCompletenessRing />
    </main>
  );
}
