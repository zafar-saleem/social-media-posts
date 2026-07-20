"use client";

import React from "react";
import styles from "./styles.module.css";

const DATA = [
  {
    id: 1,
    title: "hydrate",
    duration: "2 min",
    done: false,
    icon: <img width="38" height="38" src="https://img.icons8.com/emoji/48/jar-emoji.png" alt="jar-emoji"/>,
  },
  {
    id: 2,
    title: "Stretch",
    duration: "10 min",
    done: false,
    icon: <img width="38" height="38" src="https://img.icons8.com/3d-fluency/94/sleeping-mat.png" alt="sleeping-mat"/>,
  },
  {
    id: 3,
    title: "Deep Work",
    duration: "45 min",
    done: false,
    icon: <img width="38" height="38" src="https://img.icons8.com/3d-fluency/94/brain.png" alt="brain"/>,
  },
]

export const TasksList = () => {
  const [data, setData] = React.useState(DATA);

  return (
    <ul className={styles.tasks_list}>
      {
        data.map((item, index) => (
          <li key={index}>
            {item.icon}
            <div>
              <span className={styles.title}>{item.title}</span>
              <span className={styles.duration}>{item.duration}</span>
            </div>
            <label>
              <input type="checkbox" />
            </label>
          </li>
        ))
      }
    </ul>
  )
}