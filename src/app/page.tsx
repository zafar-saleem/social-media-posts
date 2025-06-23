import { CardAnimation } from "@/components/cards/card-animation";
import styles from "./page.module.css";
import React from "react";

export default function Home() {
  return (
    <main className={styles.center}>
      <CardAnimation />
    </main>
  );
}
