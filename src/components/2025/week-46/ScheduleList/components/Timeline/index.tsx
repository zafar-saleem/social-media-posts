import React from "react";
import styles from "./styles.module.css";
import { TimelineLabels } from "./components/TimelineLabels";

export const Timeline = ({ ...props }) => {
  const {
    hour, minute,
  } = props;

  return (
    <section className={styles.relative}>
      <section className={styles.container}>
        <section className={styles.timeline}
          style={{
            "--handle-min-position": `${hour * 60 + minute}px`,
            "--parent-center": `${30 / 2}rem`,
          }}
        >
          <span className={styles.current_time_handle} />
          <TimelineLabels {...props} />
        </section>
      </section>
    </section>
  )
}
