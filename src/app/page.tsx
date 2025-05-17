"use client"

import styles from "./page.module.css";
import React from "react";
import { Signup } from "@/components/forms/signup";

export default function Home() {
  return (
    <main className={styles.center}>
      <Signup />
    </main>
  );
}
