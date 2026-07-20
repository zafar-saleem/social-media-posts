"use client";

import React from "react";
import styles from "./share.module.css";

export const ShareProject = () => {
  const [submit, setSubmit] = React.useState("Send");

  React.useEffect(() => {
    if (submit === "Send") return;

    setTimeout(() => {
      setSubmit("Sent");
    }, 1000);
  }, [submit]);

  return (
    <form className={styles.container}>
      <span className={styles.title}>Share this project</span>
      <p className={styles.text}>
        Get feedback from your colleagues and friends by sharing it with them
      </p>
      <div className={styles.field}>
        <input type="url" defaultValue="https://example-url.com/123/project-name" />
        <button className={styles.field_icon} type="button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#797a7b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-copy-icon lucide-book-copy"><path d="M5 7a2 2 0 0 0-2 2v11"/><path d="M5.803 18H5a2 2 0 0 0 0 4h9.5a.5.5 0 0 0 .5-.5V21"/><path d="M9 15V4a2 2 0 0 1 2-2h9.5a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H11a2 2 0 0 1 0-4h10"/></svg>          
        </button>
      </div>
      <div className={styles.team_container}>
        <span className={styles.team_title}>Share with team members</span>
        <div className={styles.team}>
          <label>
            <input type="checkbox" />
            <span className={styles.team_member} />
          </label>
          <label>
            <input type="checkbox" />
            <span className={styles.team_member} />
          </label>
          <label>
            <input type="checkbox" />
            <span className={styles.team_member} />
          </label>
          <label>
            <input type="checkbox" />
            <span className={styles.team_member} />
          </label>
          <label>
            <input type="checkbox" />
            <span className={styles.team_member} />
          </label>
          <label>
            <input type="checkbox" />
            <span className={styles.team_member} />
          </label>
          <label>
            <input type="checkbox" />
            <span className={styles.team_member} />
          </label>
          <label>
            <input type="checkbox" />
            <span className={styles.team_member} />
          </label>
        </div>
      </div>
      <button className={`${styles.btn_send}`} type="button" onClick={() => setSubmit("Sending")}>
        <span className={styles.btn_label}>{submit}</span>
        <span className={`${submit === "Sending" || submit === "Sent" ? styles.pending : null} ${styles.btn_icon}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="rgb(255 255 255)" stroke="rgb(0 0 0)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-horizontal-icon lucide-send-horizontal"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"/><path d="M6 12h16"/></svg>
        </span>
      </button>
    </form>
  )
}
