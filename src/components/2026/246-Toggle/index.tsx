"use client";

import React from "react";
import styles from "./styles.module.css";

export const Toggle = () => {
  const [isChecked, setChecked] = React.useState(false);
  const [pos, setPos] = React.useState("-2.75rem");

  console.log(pos, isChecked);

  return (
    <label
      className={styles.label}
      style={{ "--left": pos }}
      onKeyDown={() => !isChecked ? setPos("-2.75rem") : setPos("-1.82rem")}
      onKeyUp={() => !isChecked ? setPos("-8.75rem") : setPos("-1.82rem")}
    >
      <input type="checkbox" className={styles.checkbox} 
        onChange={() => setChecked(!isChecked)}
      />
      <span className={styles.text}>Notifications</span>
    </label>
  )
}