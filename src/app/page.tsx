import styles from "./page.module.css";
import { FeedbackForm } from "@/components/2026/6. June/08-12/FeedbackForm";

export default function Home() {
  return (
    <main className={styles.center}>
      <FeedbackForm />
    </main>
  );
}
