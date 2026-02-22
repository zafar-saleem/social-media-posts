import styles from "./page.module.css";
import { WalkingTracker } from "@/components/2026/2. Feb/23-28/WalkingTracker";

export default function Home() {
  return (
    <main className={styles.center}>
      <WalkingTracker />
    </main>
  );
}
