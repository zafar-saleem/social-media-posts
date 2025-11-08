import styles from "./page.module.css";
import React from "react";
import { DoUndoButton } from "@/components/2025/week-46/DoUndoButton";

export default function Home() {
  return (
    <main className={styles.center}>
      <DoUndoButton
       do_label="Delete"
       undo_label="Cancel Deletion"
       tooltip_text="Click to stop delete operation"
      />
    </main>
  );
}
