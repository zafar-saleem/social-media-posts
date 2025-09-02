import styles from "./task.module.css";

export const TaskMind = () => {
  return (
    <div className={styles.container}>
      <header className={styles.card_header}>
        <div className={styles.title_wrapper}>
          <span>Edition #54322</span>
          <span className={styles.card_title}>Southeast Full Agent List</span>
          <div className={styles.card_meta}>
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(150 150 150)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag-icon lucide-shopping-bag"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>
              <span className={styles.label}>Purchased 09.20.2025</span>
            </span>
            <span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(150 150 150)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock-icon lucide-clock"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>
              <span className={styles.label}>Updated 10.20.2025</span>
            </span>
          </div>
        </div>
        <div className={styles.status}>
          <span className={styles.current_status}>Active</span>
        </div>
      </header>
      <main className={styles.content}>
        <div className={`${styles.submission_wrapper}`}>
          <div className={styles.header}>
            <span className={styles.icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(85 87 99)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notepad-text-icon lucide-notepad-text"><path d="M8 2v4"/><path d="M12 2v4"/><path d="M16 2v4"/><rect width="16" height="18" x="4" y="4" rx="2"/><path d="M8 10h6"/><path d="M8 14h8"/><path d="M8 18h5"/></svg>
            </span>
            <span className={styles.title}>Submission 1</span>
            <div className={styles.controls}>
              <button>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(235 235 235)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-pen-line-icon lucide-file-pen-line"><path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"/><path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><path d="M8 18h1"/></svg>
              </button>
              <button>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(235 235 235)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-pen-icon lucide-square-pen"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg>
              </button>
            </div>
          </div>
          <div className={`${styles.submitted} ${styles.states}`}>
            <div className={styles.state}>
              <span>
                <span>17</span>
                <span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgb(67 153 131)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-check-icon lucide-mail-check"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="m16 19 2 2 4-4"/></svg>
                </span>
              </span>
              <span>Sent</span>
            </div>
            <div className={styles.state}>
              <span>
                <span>2</span>
                <span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgb(233 167 117)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package-open-icon lucide-package-open"><path d="M12 22v-9"/><path d="M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"/><path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"/><path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"/></svg>
                </span>
              </span>
              <span>Opened</span>
            </div>
            <div className={styles.state}>
              <span>
                <span>5</span>
                <span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgb(149 95 183)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mouse-pointer-click-icon lucide-mouse-pointer-click"><path d="M14 4.1 12 6"/><path d="m5.1 8-2.9-.8"/><path d="m6 12-1.9 2"/><path d="M7.2 2.2 8 5.1"/><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"/></svg>
                </span>
              </span>
              <span>Clicked</span>
            </div>
            <div className={styles.progress}>
              <progress value="40" max="100" />
              <div>
                <span>Progress</span>
                <span>35%</span>
              </div>
            </div>
          </div>
        </div>





        <div className={`${styles.locked} ${styles.submission_wrapper}`}>
          <div className={styles.header}>
            <span className={styles.icon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(85 87 99)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-icon lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </span>
            <span className={styles.title}>Submission 2</span>
          </div>
          <div className={`${styles.pending} ${styles.states}`}>
            <span>Available 30 days after Submission 1</span>
          </div>
        </div>
        
        
        <div className={`${styles.locked} ${styles.submission_wrapper}`}>
          <div className={styles.header}>
            <span className={styles.icon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(85 87 99)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-icon lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </span>
            <span className={styles.title}>Submission 3</span>
          </div>
          <div className={`${styles.pending} ${styles.states}`}>
            <span>Available 30 days after Submission 2</span>
          </div>
        </div>
      </main>
    </div>
  )
}
