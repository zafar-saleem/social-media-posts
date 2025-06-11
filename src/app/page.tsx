import styles from "./page.module.css";
import React from "react";
import { ShareLink } from "@/components/share-link";

export default function Home() {
  return (
    <main className={styles.center}>
      <ShareLink />
    </main>
  );
}
