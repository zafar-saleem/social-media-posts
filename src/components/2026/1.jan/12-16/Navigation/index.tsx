"use client";

import Link from "next/link"
import styles from "./styles.module.css"
import React from "react";

export const Navigation = () => {
  const [active, setActive] = React.useState("dashboard");

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation_list}>
        <li className={styles.list_item}>
          <Link
            href="#"
            className={`${active === "dashboard" && styles.active} ${styles.item_link}`}
            onClick={() => setActive("dashboard")}
          >
            <span className={styles.icon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(155 155 155)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            </span>
            <span className={styles.label}>Dashboard</span>
          </Link>
        </li>
        <li className={styles.list_item}>
          <Link
            href="#"
            className={`${active === "products" && styles.active} ${styles.item_link}`}
            onClick={() => setActive("products")}
          >
            <span className={styles.icon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(155 155 155)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-box-icon lucide-box"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
            </span>
            <span className={styles.label}>Products</span>
          </Link>
        </li>
        <li className={styles.list_item}>
          <Link
            href="#"
            className={`${active === "orders" && styles.active} ${styles.item_link}`}
            onClick={() => setActive("orders")}
          >
            <span className={styles.icon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(155 155 155)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-round-corner-icon lucide-square-round-corner"><path d="M21 11a8 8 0 0 0-8-8"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>
            </span>
            <span className={styles.label}>Orders</span>
          </Link>
        </li>
        <li className={styles.list_item}>
          <Link
            href="#"
            className={`${active === "customers" && styles.active} ${styles.item_link}`}
            onClick={() => setActive("customers")}
          >
            <span className={styles.icon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(155 155 155)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>
            </span>
            <span className={styles.label}>Customers</span>
          </Link>
        </li>
        <li className={styles.list_item}>
          <Link
            href="#"
            className={`${active === "payments" && styles.active} ${styles.item_link}`}
            onClick={() => setActive("payments")}
          >
            <span className={styles.icon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(155 155 155)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card-icon lucide-credit-card"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
            </span>
            <span className={styles.label}>Payments</span>
          </Link>
        </li>
        <li className={styles.list_item}>
          <Link
            href="#"
            className={`${active === "developers" && styles.active} ${styles.item_link}`}
            onClick={() => setActive("developers")}
          >
            <span className={styles.icon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(155 155 155)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor-icon lucide-monitor"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
            </span>
            <span className={styles.label}>Developers</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}