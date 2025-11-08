import styles from "./page.module.css";
import React from "react";
import { DoUndoButton } from "@/components/2025/week-46/DoUndoButton";
import { MeetingRoom } from "@/components/2025/week-46/MeetingRoom";

export default function Home() {
  return (
    <main className={styles.center}>
      <MeetingRoom />
    </main>
  );
}
