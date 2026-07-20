import { WithDataProps } from "../../types"
import styles from "../../Notifications.module.css";
import Image from "next/image";
import React from "react";

export const NotificationsList = React.memo(({ data }: WithDataProps) => {
  if (data.length > 0) {
    return (
      <ul className={styles.items}>
        {
          data.map((item, index) => (
            <li key={index} className={styles.item}>
              <div className={styles.title}>
                <Image
                  src={item.icon}
                  width={25}
                  height={25}
                  alt=""
                />
                <span className={styles.name}>{item.title}</span>
                <span className={styles.timestamp}>{item.timestamp}</span>
              </div>
              <p className={styles.text}>{item.text}</p>
              <div className={styles.actions}>
                <span>{item.states.action}</span>
                <span className={styles.chip}>
                  {item.states.prev_state.icon}
                  <span className={styles.chip_text}>{item.states.prev_state.text}</span>
                </span>
                <span>your</span>
                <span>{item.type}</span>
                <span>to</span>
                <span className={styles.chip}>
                  {item.states.current_state.icon}
                  <span className={styles.chip_text}>{item.states.current_state.text}</span>
                </span>
              </div>
            </li>
          ))
        }
      </ul>
    )
  }
})
