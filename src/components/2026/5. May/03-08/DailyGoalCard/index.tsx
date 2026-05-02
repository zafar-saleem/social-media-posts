"use client";

import React, { CSSProperties } from "react";
import styles from "./styles.module.css";

const DATA = {
  component_name: "Daily Goal",
  streak: "3 day streak",
  status_label: "Intense!",
  text: "Making real progress",
  progress: 50,
  duration: "15 Minutes/day",
  xp: "42 XP/day",
}

export const DailyGoalCard = () => {
  const [data] = React.useState(() => ({...DATA, progress: 80}));

  return (
    <div className={styles.card}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(204 206 216)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target-icon lucide-target"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
      <span className={styles.name}>{data.component_name}</span>
      <span className={styles.streak}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(255 108 6)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame-kindling-icon lucide-flame-kindling"><path d="M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"/><path d="m5 22 14-4"/><path d="m5 18 14 4"/></svg>
        {data.streak}
      </span>
      <div className={styles.icon}>🚀</div>
      <h1 className={styles.title}>{data.status_label}</h1>
      <p className={styles.text}>{data.text}</p>
      <div className={styles.progress} style={{ "--w": `${data.progress}%` } as CSSProperties}>
        <span>{data.progress}%</span>
      </div>
      <div className={styles.daily_info} style={{ "--w": `${data.progress}%` } as CSSProperties}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="rgb(137 69 242)" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock5-icon lucide-clock-5"><circle cx="12" cy="12" r="10"/><path strokeWidth={1} fill="rgb(255 255 255)" d="M12 6v6l2 4"/></svg>
          <span>{data.duration}</span>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="rgb(246 87 57)" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
          <span>{data.xp}</span>
        </div>
      </div>
      <button className={styles.button}>Set goal</button>
    </div>
  )
}