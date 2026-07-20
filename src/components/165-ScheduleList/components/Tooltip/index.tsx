"use client";

import React from "react";
import styles from "./styles.module.css";

export const Tooltip = ({ data, positionAnchor }) => {
  const [dom, setDom] = React.useState(false);

  React.useEffect(() => {
    setDom(true)
  }, []);

  return (
    <div
      className={styles.tooltip}
      style={{
        "--anchor-position": positionAnchor,
      }}
    >
      <span className={styles.title}>{data.title}</span>
      <p>{data.description}</p>
      <div>
        {
          data.contributors.map((item, index) => (
            <React.Fragment key={index}>
              <span
                className={styles.avatar}
                style={{
                  "--t-bg-color": item.avatar_color,
                }}
              >{item.avatar}</span>
            </React.Fragment>
          ))
        }
      </div>
    </div>
  )
}
