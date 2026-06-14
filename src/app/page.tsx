import { Notifications } from "@/components/2026/6. June/15-19/Notifications";
import styles from "./page.module.css";
import { CTAButtonHover } from "@/components/2026/6. June/15-19/CTAButton";

export default function Home() {
  return (
    <main className={styles.center}>
      <Notifications />
    </main>
  );
}
