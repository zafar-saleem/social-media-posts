import styles from "./page.module.css";
import React from "react";
import { Navbar } from "@/components/nav/nav-bar";
import { StoragePlan } from "@/components/storage-plan";

export default function Home() {
  return (
    <main className={styles.center}>
      <StoragePlan />
    </main>
  );
}
