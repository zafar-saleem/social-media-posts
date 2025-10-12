import React from "react";
import styles from "../../Widget.module.css";
import { People } from "../../data";

export const Header = () => {
  const [isShowAll, setShowAll] = React.useState(false);

  return (  
    <header className={styles.header}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(96 103 102)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-user-round-icon lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>        
      <span className={styles.header_label}>People</span>
      <span className={styles.header_counter}>{People.length}</span>
      <div className={styles.header_control}>
        <label className={styles.control_label}>
          <div className={styles.label_text}>
            {
              isShowAll ? <span>Show All</span> : <span>Hide</span>
            }
          </div>
          <input type="checkbox" className={styles.control_toggle} onChange={() => setShowAll(!isShowAll)} />
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(96 103 102)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
        </label>
      </div>
    </header>
  )
}
