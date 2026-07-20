"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import React from "react";

export const Navigation = () => {
  const [active, setActive] = React.useState("home");

  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Link
            href="#"
            className={active === "home" ? styles.active : ""}
            onClick={() => setActive("home")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            <span className={styles.label}>Home</span>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className={active === "explore" ? styles.active : ""}
            onClick={() => setActive("explore")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
            <span className={styles.label}>Explore</span>
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className={active === "profile" ? styles.active  : ""}
            onClick={() => setActive("profile")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span className={styles.label}>Profile</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}