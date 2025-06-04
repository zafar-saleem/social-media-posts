import styles from "./page.module.css";
import React from "react";
import { Navbar } from "@/components/nav/nav-bar";
import { Profile } from "@/components/profile";

export default function Home() {
  return (
    <main className={styles.center}>
      <Profile />
    </main>
  );
}
