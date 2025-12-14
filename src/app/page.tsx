import styles from "./page.module.css";
import { ShippingFeaturesSection } from "@/components/2025/week-52/ShippingFeatures";

export default function Home() {
  return (
    <main className={styles.center}>
      <ShippingFeaturesSection />
    </main>
  );
}

