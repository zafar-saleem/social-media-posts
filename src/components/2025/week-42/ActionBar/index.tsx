"use client";

import React from "react";
import styles from "./ActionBar.module.css";
import Image from "next/image";
import { People } from "./People";

export const ActionBar = () => {
  const [selected, setSelected] = React.useState(0);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.table_head}>
          <tr>
            <th className={styles.head_column}></th>
            {
              People.head_labels.map((label, index) => (
                <React.Fragment  key={index}>
                  <th className={styles.head_column}>
                    <div>
                      {label.icon}
                      <span className={styles.label}>{label.text}</span>
                    </div>
                  </th>
                </React.Fragment> 
              ))
            }
          </tr>
        </thead>
        <tbody className={styles.table_body}>
          {
            People.values.map((personnal, index) => (
              <tr  key={index}>
                <th className={styles.body_column}>
                  <input
                    type="checkbox"
                    onChange={(event) => {
                      event.target.checked
                        ? setSelected(() => selected + 1)
                        : setSelected(() => selected - 1);
                    }}
                  />
                </th>
                <th className={styles.body_column}>{personnal.name}</th>
                <th className={styles.body_column}>
                  <div className={styles.column_text}>
                    <span className={styles.email_text}>{personnal.email}</span>
                    <button>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(100 100 100)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers2-icon lucide-layers-2"><path d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z"/><path d="m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845"/></svg>
                    </button>
                    <span className={styles.button_tooltip}>Copy Email</span>
                  </div>
                </th>
                <th className={`${styles.company_column} ${styles.body_column}`}>
                  <div>
                    <Image
                      src={personnal.company.logo}
                      width={15}
                      height={15}
                      alt=""
                    />
                    <span>{personnal.company.name}</span>
                  </div>
                </th>
                <th className={styles.body_column}>{personnal.created_at}</th>
              </tr> 
            ))
          }
        </tbody>
      </table>
      <div className={`${styles.action_bar} ${selected > 0 && styles.reveal}`}>
        <div>
          <span>{selected} Selected</span>
          <button>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(214 216 215)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
        <button className={styles.button_export}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(214 216 215)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download-icon lucide-download"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>
          <span className={styles.button_label}>Export</span>
        </button>
        <button className={styles.button_delete}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          <span className={styles.button_label}>Delete</span>
        </button>
      </div>
    </div>
  )
}