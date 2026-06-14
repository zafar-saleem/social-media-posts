import styles from "./page.module.css";
import { ProfileDetails } from "@/components/2026/6. June/15-19/ProfileDetails";

export default function Home() {
  return (
    <main className={styles.center}>
      <ProfileDetails />
    </main>
  );
}
