"use client";

import styles from "./Notifications.module.css";
import React from "react";
import { data } from "./data";
import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs";
import { EmptyState } from "./components/EmptyState";
import { NotificationsList } from "./components/NotificationsList";

export const Notifications = () => {
  const [filter, setFilter] = React.useState(data);

  return (
    <section className={styles.notifications}>
      <Header setFilter={setFilter} data={filter} />
      <main className={styles.contents}>
        <Tabs setFilter={setFilter} data={filter} />
        <EmptyState data={filter} />
        <NotificationsList data={filter} />
      </main>
    </section>
  )
}
