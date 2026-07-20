import React from "react";
import styles from "./styles.module.css";

const USERS = {
  all: {
    total_users: "2,405",
    data: [
      {
        label: "M",
        value: 140,
        color: "rgb(230, 230, 230)",
      },
      {
        label: "T",
        value: 30,
        color: "rgb(230, 230, 230)",
      },
      {
        label: "W",
        value: 110,
        color: "rgb(230, 230, 230)",
      },
      {
        label: "T",
        value: 160,
        color: "rgb(239 33 10)",
      },
      {
        label: "F",
        value: 124,
        color: "rgb(230, 230, 230)",
      },
      {
        label: "S",
        value: 130,
        color: "rgb(230, 230, 230)",
      },
      {
        label: "S",
        value: 100,
        color: "rgb(230, 230, 230)",
      },
    ]
  },
  active: {
    total_users: "505",
    data: [
      {
        label: "M",
        value: 100,
        color: "rgb(230, 230, 230)",
      },
      {
        label: "T",
        value: 30,
        color: "rgb(230, 230, 230)",
      },
      {
        label: "W",
        value: 10,
        color: "rgb(230, 230, 230)",
      },
      {
        label: "T",
        value: 20,
        color: "rgb(230, 230, 230)",
      },
      {
        label: "F",
        value: 40,
        color: "rgb(230, 230, 230)",
      },
      {
        label: "S",
        value: 10,
        color: "rgb(230, 230, 230)",
      },
      {
        label: "S",
        value: 130,
        color: "rgb(239 33 10)",
      },
    ]
  },
  unactive: {
    total_users: "805",
    data: [
      {
        label: "M",
        value: 30,
        color: "rgb(230, 230, 230)",
      },
      {
        label: "T",
        value: 130,
        color: "rgb(239 33 10)",
      },
      {
        label: "W",
        value: 120,
        color: "rgb(230, 230, 230)",
      },
      {
        label: "T",
        value: 110,
        color: "rgb(230, 230, 230)",
      },
      {
        label: "F",
        value: 50,
        color: "rgb(230, 230, 230)",
      },
      {
        label: "S",
        value: 104,
        color: "rgb(230, 230, 230)",
      },
      {
        label: "S",
        value: 110,
        color: "rgb(230, 230, 230)",
      },
    ]
  }
}

export const TrackingStats = () => {
  return (
    <div className={styles.card}>
      <div className={styles.tabs}>
        <label className={styles.tab_label}>
          <input type="radio" className={`${styles.tab} ${styles.tab_all}`} name="tab" defaultChecked />
          <span className={styles.label}>All</span>
        </label>
        <label className={styles.tab_label}>
          <input type="radio" className={`${styles.tab_active} ${styles.tab}`} name="tab" />
          <span className={styles.label}>Active</span>
        </label>
        <label className={styles.tab_label}>
          <input type="radio" className={`${styles.tab_unactive} ${styles.tab}`} name="tab" />
          <span className={styles.label}>Not Active</span>
        </label>
      </div>
      <div className={styles.contents}>
        <div className={styles.tab_all}>
          <span className={styles.card_title_container}>
            <h1 className={styles.card_title}>{USERS.all.total_users}</h1>
            <span className={styles.title_label}>Total Users</span>
          </span>
          <div className={styles.chart}>
            {
              USERS.all.data.map((item, index) => (
                <div key={index}>
                  <div
                    className={styles.bar}
                    style={{
                      "--value": `${item.value}px`,
                      "--color": item.color,
                    }}
                  />
                  <span className={styles.bar_label}>{item.label}</span>
                </div>
              ))
            }
          </div>
        </div>
        
        
        <div className={styles.tab_active}>
          <span className={styles.card_title_container}>
            <h1 className={styles.card_title}>{USERS.active.total_users}</h1>
            <span className={styles.title_label}>Total Users</span>
          </span>
          <div className={styles.chart}>
            {
              USERS.active.data.map((item, index) => (
                <div key={index}>
                  <div
                    className={styles.bar}
                    style={{
                      "--value": `${item.value}px`,
                      "--color": item.color,
                    }}
                  />
                  <span className={styles.bar_label}>{item.label}</span>
                </div>
              ))
            }
          </div>
        </div>
        
        
        <div className={styles.tab_unactive}>
          <span className={styles.card_title_container}>
            <h1 className={styles.card_title}>{USERS.unactive.total_users}</h1>
            <span className={styles.title_label}>Total Users</span>
          </span>
          <div className={styles.chart}>
            {
              USERS.unactive.data.map((item, index) => (
                <div key={index}>
                  <div
                    className={styles.bar}
                    style={{
                      "--value": `${item.value}px`,
                      "--color": item.color,
                    }}
                  />
                  <span className={styles.bar_label}>{item.label}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}