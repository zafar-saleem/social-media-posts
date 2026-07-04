import styles from "./page.module.css";
import { ConnectWallet } from "@/components/2026/7. July/01-05/ConnectWallet";

export default function Home() {
  return (
    <main className={styles.center}>
      <ConnectWallet />
    </main>
  );
}
