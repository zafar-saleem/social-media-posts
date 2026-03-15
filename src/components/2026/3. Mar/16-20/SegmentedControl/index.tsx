"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import React from "react";

export const SegmentedControl = () => {
  const [active, setActive] = React.useState({
    activeLink: "",
    disable: "enable",
  });

  return (
    <nav className={`${styles.nav} ${active.disable === "disable" && styles.shake}`}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link
            href="#" className={`${styles.link} ${active.activeLink === "overview" && styles.active}`}
            onClick={() => setActive((prev) => ({ activeLink: "overview", disable: "enable" }))}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(156 156 156)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-chart-gantt-icon lucide-square-chart-gantt"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 8h7"/><path d="M8 12h6"/><path d="M11 16h5"/></svg>
            <span>Overview</span>
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="#" className={`${styles.link} ${active.activeLink === "analytics" && styles.active}`}
            onClick={() => setActive((prev) => ({ activeLink: "analytics", disable: "enable" }))}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(156 156 156)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-pie-icon lucide-chart-pie"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"/><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/></svg>
            <span>Analytics</span>
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="#" className={`${styles.link} ${styles.disable}`}
            onClick={(e) => {
              e.preventDefault();
              setActive((prev) => ({ activeLink: prev.activeLink, disable: "disable" }));
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(156 156 156)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-clock-icon lucide-clipboard-clock"><path d="M16 14v2.2l1.6 1"/><path d="M16 4h2a2 2 0 0 1 2 2v.832"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"/><circle cx="16" cy="16" r="6"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>
            <span>History</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}