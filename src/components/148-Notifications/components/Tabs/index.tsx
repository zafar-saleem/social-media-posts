import { ComponentProps } from "../../types";
import styles from "../../Notifications.module.css";
import { filterNotifications } from "../../utils";
import React from "react";

export const Tabs = React.memo(({ setFilter, data }: ComponentProps) => {
  return (
    <nav className={styles.tabs}>
      <ul className={styles.tabs_list}>
        <li>
          <label className={styles.tab_label}>
            <span className={styles.label_text}>All</span>
            <input
              type="radio"
              name="tab"
              defaultChecked
              onChange={() => setFilter(() => filterNotifications(data, "", "all"))}
            />
          </label>
        </li>
        <li>
          <label className={styles.tab_label}>
            <span className={styles.label_text}>Unreads</span>
            <input
              type="radio"
              name="tab"
              onChange={() => setFilter(() => filterNotifications(data, "category", "Unread"))}
            />
          </label>
        </li>
        <li>
          <label className={styles.tab_label}>
            <span className={styles.label_text}>Mentions</span>
            <input
              type="radio"
              name="tab"
              onChange={() => setFilter(() => filterNotifications(data, "mention", "@Me"))}
            />
          </label>
        </li>
      </ul>
    </nav>
  )
})