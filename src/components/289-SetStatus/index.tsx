"use client";

import React from "react";
import styles from "./styles.module.css";

const INITIAL_STATES = [
  {
    label: "Set Status",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(209 209 209)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dot-dashed-icon lucide-circle-dot-dashed"><path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0"/><path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"/><path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8"/><path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"/><path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0"/><path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"/><path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8"/><path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"/><circle cx="12" cy="12" r="1"/></svg>,
    selected: true,
  },
  {
    label: "Draft",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(233 189 59)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dot-dashed-icon lucide-circle-dot-dashed">
        <path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0" />
        <path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"/>
        <path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8"/>
        <path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" stroke="rgb(247 238 221)" />
        <path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0" stroke="rgb(247 238 221)" />
        <path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" stroke="rgb(247 238 221)" />
        <path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8" stroke="rgb(247 238 221)" />
        <path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" stroke="rgb(247 238 221)" />
        <circle cx="12" cy="12" r="1"/>
      </svg>,
    selected: false,
  },
  {
    label: "Review",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(229 116 61)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dot-dashed-icon lucide-circle-dot-dashed">
      <path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0"/>
      <path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"/>
      <path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8"/>
      <path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"/>
      <path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0"/>
      <path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" stroke="rgb(241 216 211)"/>
      <path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8" stroke="rgb(241 216 211)"/>
      <path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" stroke="rgb(241 216 211)"/>
      <circle cx="12" cy="12" r="1"/>
    </svg>,
    selected: false,
  },
  {
    label: "Approval",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(71 141 212)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dot-dashed-icon lucide-circle-dot-dashed">
      <path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0"/>
      <path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"/>
      <path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8"/>
      <path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"/>
      <path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0"/>
      <path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"/>
      <path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8" />
      <path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" stroke="rgb(219 226 241)"/>
      <circle cx="12" cy="12" r="1"/>
    </svg>,
    selected: false,
  },
  {
    label: "Done",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(29 176 118)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dot-dashed-icon lucide-circle-dot-dashed"><path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0"/><path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"/><path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8"/><path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"/><path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0"/><path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"/><path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8"/><path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"/><circle cx="12" cy="12" r="1"/></svg>,
    selected: false,
  },
]

export const SetStatus = () => {
  const [buttonStatus, setButtonStatus] = React.useState(INITIAL_STATES);

  const updateTicketStatus = (label: string) => {
    console.log(label);
    setButtonStatus(() => {
      return buttonStatus.map(item => {
        if (item.label === label) {
          item.selected = true;
          return item;
        }
        item.selected = false;
        return item;
      });
    })
  }

  return (
    <div className={styles.container}>
      <label className={styles.button}>
        <input type="checkbox" className={styles.input} />
          {
            buttonStatus.map((item) => (
              <React.Fragment key={item.label}>
                {item.selected && item.icon}
                {
                  item.selected && <span>{item.label}</span>
                }
              </React.Fragment>
            ))
          }
      </label>
      <div className={styles.status_list}>
        <button className={styles.button_draft} onClick={() => updateTicketStatus('Draft')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(233 189 59)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dot-dashed-icon lucide-circle-dot-dashed">
            <path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0"/>
            <path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"/>
            <path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8"/>
            <path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" stroke="rgb(247 238 221)" />
            <path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0" stroke="rgb(247 238 221)" />
            <path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" stroke="rgb(247 238 221)" />
            <path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8" stroke="rgb(247 238 221)" />
            <path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" stroke="rgb(247 238 221)" />
            <circle cx="12" cy="12" r="1"/>
          </svg>
        </button>
        <span className={`${styles.tooltip} ${styles.draft}`}>Draft</span>
        <button className={styles.button_review} onClick={() => updateTicketStatus('Review')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(229 116 61)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dot-dashed-icon lucide-circle-dot-dashed">
            <path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0"/>
            <path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"/>
            <path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8"/>
            <path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"/>
            <path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0" />
            <path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" stroke="rgb(241 216 211)"/>
            <path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8" stroke="rgb(241 216 211)"/>
            <path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" stroke="rgb(241 216 211)"/>
            <circle cx="12" cy="12" r="1"/>
          </svg>
        </button>
        <span className={`${styles.tooltip} ${styles.review}`}>Review</span>
        <button className={styles.button_approval} onClick={() => updateTicketStatus('Approval')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(71 141 212)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dot-dashed-icon lucide-circle-dot-dashed">
            <path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0"/>
            <path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"/>
            <path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8"/>
            <path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"/>
            <path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0"/>
            <path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"/>
            <path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8" />
            <path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" stroke="rgb(219 226 241)"/>
            <circle cx="12" cy="12" r="1"/>
          </svg>
        </button>
        <span className={`${styles.tooltip} ${styles.approval}`}>Approval</span>
        <button className={styles.button_done} onClick={() => { updateTicketStatus('Done') }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(29 176 118)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dot-dashed-icon lucide-circle-dot-dashed"><path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0"/><path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"/><path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8"/><path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"/><path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0"/><path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"/><path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8"/><path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"/><circle cx="12" cy="12" r="1"/></svg>
        </button>
        <span className={`${styles.tooltip} ${styles.done}`}>Done</span>
      </div>
    </div>
  )
}