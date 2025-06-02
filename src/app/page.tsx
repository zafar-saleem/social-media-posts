import styles from "./page.module.css";
import React from "react";
import { Navbar } from "@/components/nav/nav-bar";
import { SocialTraffic } from "@/components/social-traffic";

export default function Home() {
  return (
    <main className={styles.center}>
      <SocialTraffic />
    </main>
  );
}
