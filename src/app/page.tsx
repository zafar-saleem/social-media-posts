"use client"

import styles from "./page.module.css";
import React from "react";
import { ButtonsWithState } from "@/components/buttons/state-buttons";
import { Outdoor } from "@/components/cards/Outdoor";
import { Notifications } from "@/components/notifications";

export default function Home() {
  return (
    <main className={styles.center}>
      {/* <MegaMenu /> */}
      <Notifications />
    </main>
  );
}
