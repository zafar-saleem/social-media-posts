"use client";

import React from "react";
import styles from "./styles.module.css";

export const Status = () => {
  const [status, setStatus] = React.useState("");
  const popoverRef = React.useRef(null);
  
  return (
    <button className={styles.button_status} popoverTarget="popover">
      <div className={`${styles[status.toLowerCase().split(" ").join("_")]} ${styles.button_label}`}>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(181 181 189)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-squircle-dashed-icon lucide-squircle-dashed"><path d="M13.77 3.043a34 34 0 0 0-3.54 0"/><path d="M13.771 20.956a33 33 0 0 1-3.541.001"/><path d="M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44"/><path d="M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438"/><path d="M20.957 10.23a33 33 0 0 1 0 3.54"/><path d="M3.043 10.23a34 34 0 0 0 .001 3.541"/><path d="M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438"/><path d="M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44"/></svg>
          <span>Set Status</span>
        </span>
        <span>
          <span>🌴</span>
          <span>On Vacation</span>
        </span>
        <span>
          <span>🤕</span>
          <span>Sick</span>
        </span>
        <span>
          <span>📆</span>
          <span>In Meeting</span>
        </span>
        <span>
          <span>👟</span>
          <span>Running</span>
        </span>
        <span>
          <span>🚌</span>
          <span>Traveling</span>
        </span>
      </div>
      <div className={styles.popover} id="popover" popover="auto" ref={popoverRef}>
        <button
          className={`${styles.button_vacation} ${styles.button_tooltip}`}
          onClick={() => {
            setStatus("On Vacation");
            popoverRef?.current.hidePopover();
          }}
        >🌴</button>
        <span className={`${styles.tooltip} ${styles.tooltip_vacation}`}>On Vacation</span>
        <button className={`${styles.button_sick} ${styles.button_tooltip}`}
          onClick={() => {
            setStatus("Sick");
            popoverRef?.current.hidePopover();
          }}>🤕</button>
        <span className={`${styles.tooltip} ${styles.tooltip_sick}`}>Sick</span>
        <button className={`${styles.button_meeting} ${styles.button_tooltip}`}
          onClick={() => {
            setStatus("In Meeting");
            popoverRef?.current.hidePopover();
          }}>📆</button>
        <span className={`${styles.tooltip} ${styles.tooltip_meeting}`}>In Meeting</span>
        <button className={`${styles.button_running} ${styles.button_tooltip}`}
          onClick={() => {
            setStatus("Running");
            popoverRef?.current.hidePopover();
          }}>👟</button>
        <span className={`${styles.tooltip} ${styles.tooltip_running}`}>Running</span>
        <button className={styles.button_traveling}
          onClick={() => {
            setStatus("Traveling");
            popoverRef?.current.hidePopover();
          }}>🚌</button>
        <span className={`${styles.tooltip} ${styles.tooltip_traveling}`}>Traveling</span>
        <button className={styles.button_tooltip}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(181 181 189)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-icon lucide-ellipsis"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
        </button>
      </div>
    </button>
  )
}
