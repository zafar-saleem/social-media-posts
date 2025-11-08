import React from "react";
import styles from "./styles.module.css";

type Props = {
  do_label: string;
  undo_label: string;
  tooltip_text?: string;
}

export const DoUndoButton = ({ do_label, undo_label, tooltip_text = "Click to stop" }: Props) => {
  return (
    <label className={styles.button}>
      <input type="checkbox" className={styles.button_action} />
      <span className={styles.button_icon}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-undo2-icon lucide-undo-2">
          <path d="M9 14 4 9l5-5"/>
          <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"/>
        </svg>
      </span>
      <div className={styles.label_container}>
        <span className={styles.button_delete_label}>{do_label}</span>
        <span className={styles.button_cancel_label}>{undo_label}</span>
      </div>
      <span className={`${styles.button_counter}`} />
      <span className={styles.button_tooltip}>{tooltip_text}</span>
    </label>
  )
}
