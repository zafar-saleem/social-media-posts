import React from "react";
import { TIME_LABELS } from "../../../../constants";
import styles from "./styles.module.css";
import { EventChip } from "../EventChip";

export const TimelineLabels = ({ ...props }) => {
  const {
    hour,
  } = props;

  return (
    <>
      {
        TIME_LABELS.map((label, index) => (
          <div key={index} className={styles.hour_block}>
            <span
              className={`${styles.time_label} ${hour === label.military && styles.active}`}
            >{label.regular}</span>
            <EventChip timeformat={label.military} />
          </div>
        ))
      }
    </>
  )
}
