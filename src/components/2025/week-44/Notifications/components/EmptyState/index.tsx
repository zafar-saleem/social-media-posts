import { WithDataProps } from "../../types"
import styles from "../../Notifications.module.css";
import React from "react";

export const EmptyState = React.memo(({ data }: WithDataProps) => {
  if (data.length <= 0) {
    return (
      <section className={styles.empty_state}>
        <p>You nailed all of your notifications.</p>
        <button className={styles.button_settings}>Notifications Settings</button>
      </section>
    )
  }
})
