import styles from "./page.module.css";
import { SpotlightCarousel } from "@/components/2026/5. May/18-22/SpotLightCarousel";

export default function Home() {
  return (
    <main className={styles.center}>
      <SpotlightCarousel />
    </main>
  );
}
