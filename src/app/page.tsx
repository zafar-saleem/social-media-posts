import styles from "./page.module.css";
import React from "react";
import { Navbar } from "@/components/nav/nav-bar";
import { Fitness } from "@/components/cards/fitness";

export default function Home() {
  return (
    <main className={styles.center}>
      <Fitness />
    </main>
  );
}
