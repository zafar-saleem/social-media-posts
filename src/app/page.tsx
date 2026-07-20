import styles from "./page.module.css";
import { BuiltFor } from "@/components/342-BuiltFor";

export default function Home() {
  return (
    <main className={styles.center}>
      <BuiltFor />
    </main>
  );
}
