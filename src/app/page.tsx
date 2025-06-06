import styles from "./page.module.css";
import React from "react";
import { Navbar } from "@/components/nav/nav-bar";
import { NikeCard } from "@/components/cards/nike";

export default function Home() {
  return (
    <main className={styles.center}>
      <NikeCard />
    </main>
  );
}
