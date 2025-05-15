"use client"

import styles from "./page.module.css";
import React from "react";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className={styles.center}>
      {/* <MegaMenu /> */}
      <Footer />
    </main>
  );
}
