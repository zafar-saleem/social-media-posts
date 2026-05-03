import styles from "./page.module.css";
import { ExpandableMenu } from "@/components/2026/5. May/03-08/ExpandableMenu";

export default function Home() {
  return (
    <main className={styles.center}>
      <ExpandableMenu />
    </main>
  );
}
