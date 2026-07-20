"use client";

import React, { CSSProperties } from "react";
import styles from "./styles.module.css";

const DATA = [
  {
    id: 1,
    task_name: "Claim review",
    doe: "Dec, 03, 2025",
    status: "To do",
    color: "45 105 255",
    name: "Ricardo",
  },
  {
    id: 2,
    task_name: "Policy verification",
    doe: "Dec, 03, 2025",
    status: "To do",
    color: "45 105 255",
    name: "Kobe",
  },
  {
    id: 3,
    task_name: "Account Migration",
    doe: "Dec, 03, 2025",
    status: "LOA Request",
    color: "228 39 45",
    name: "Jayson",
  },
  {
    id: 4,
    task_name: "Final Approval",
    doe: "Dec, 03, 2025",
    status: "In Progress",
    color: "90 32 202",
    name: "Shea",
  },
  {
    id: 5,
    task_name: "Data Validation",
    doe: "Dec, 03, 2025",
    status: "In Review",
    color: "217 144 0",
    name: "Eli",
  },
  {
    id: 6,
    task_name: "ID Verification",
    doe: "Dec, 03, 2025",
    status: "LOA Request",
    color: "228 39 45",
    name: "Chad",
  },
  {
    id: 7,
    task_name: "Contract Upload",
    doe: "Dec, 03, 2025",
    status: "Completed",
    color: "73 124 96",
    name: "Amber",
  },
];

export const StatusBoard = () => {
  const [data, setData] = React.useState(DATA);
  const [active, setActive] = React.useState("all");

  const filterItems = (str: string) => {
    setActive(str);

    if (str === "all") {
      return setData(DATA);
    }

    if (str === "to_do") {
      return setData(() => DATA.filter(item => item.status === "To do"));
    }

    if (str === "loa") {
      return setData(() => DATA.filter(item => item.status === "LOA Request"));
    }
    
    if (str === "progress") {
      return setData(() => DATA.filter(item => item.status === "In Progress"));
    }
    
    if (str === "review") {
      return setData(() => DATA.filter(item => item.status === "In Review"));
    }
    
    if (str === "completed") {
      return setData(() => DATA.filter(item => item.status === "Completed"));
    }
  }

  return (
    <div className={styles.board}>
      <div className={styles.filter}>
        <button
          className={`${styles.btn} ${styles.btn_all} ${active === "all" && styles.active}`}
          onClick={() => filterItems("all")}
        >
          <span>All</span>
          <span>{DATA.length}</span>
        </button>
        <button
          className={`${styles.btn} ${styles.btn_todo} ${active === "to_do" && styles.active}`}
          onClick={() => filterItems("to_do")}
        >
          <span className={styles.color} />
          <span>To do</span>
          <span>{DATA.filter(item => item.status === "To do").length}</span>
        </button>
        <button
          className={`${styles.btn} ${styles.btn_loa} ${active === "loa" && styles.active}`}
          onClick={() => filterItems("loa")}
        >
          <span className={styles.color} />
          <span>LOA Request</span>
          <span>{DATA.filter(item => item.status === "LOA Request").length}</span>
        </button>
        <button
          className={`${styles.btn} ${styles.btn_progress} ${active === "progress" && styles.active}`}
          onClick={() => filterItems("progress")}
        >
          <span className={styles.color} />
          <span>In Progress</span>
          <span>{DATA.filter(item => item.status === "In Progress").length}</span>
        </button>
        <button
          className={`${styles.btn} ${styles.btn_review} ${active === "review" && styles.active}`}
          onClick={() => filterItems("review")}
        >
          <span className={styles.color} />
          <span>In Review</span> 
          <span>{DATA.filter(item => item.status === "In Review").length}</span>
        </button>
        <button
          className={`${styles.btn} ${styles.btn_completed} ${active === "completed" && styles.active}`}
          onClick={() => filterItems("completed")}
        >
          <span className={styles.color} />
          <span>Completed</span>
          <span>{DATA.filter(item => item.status === "Completed").length}</span></button>
      </div>
      <table className={styles.table}>
        <thead className={styles.table_head}>
          <tr>
            <th>Task Name</th>
            <th>Date of EBS</th>
            <th>Status</th>
            <th>Advisor Name</th>
          </tr>
        </thead>
        <tbody className={styles.table_body}>
          {
            data.map(item => (
              <tr key={item.id}>
                <td>{item.task_name}</td>
                <td>{item.doe}</td>
                <td>
                  <span
                    className={`${styles.status_badge}`}
                    style={{ "--color": item.color } as CSSProperties}
                  >{item.status}</span>
                </td>
                <td>{item.name}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}