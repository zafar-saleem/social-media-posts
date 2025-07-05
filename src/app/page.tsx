import { Login } from "@/components/login";
import styles from "./page.module.css";
import React from "react";

export default function Home() {
  return (
    <main className={styles.center}>
      <Login />
    </main>
  );
}
