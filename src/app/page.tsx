import { DownloadButton } from "@/components/2025/week-50/Button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.center}>
      <DownloadButton label="Download" />
    </main>
  );
}

