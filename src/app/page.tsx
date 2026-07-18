import styles from "./page.module.css";
import { LoginForm } from "@/components/2026/7. July/20-24/LoginForm";

export default function Home() {
  return (
    <main className={styles.center}>
      <LoginForm />
    </main>
  );
}
