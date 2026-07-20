import styles from "./SwitchView.module.css";

export const SwitchViews = () => {
  return (
    <div className={styles.switch_view}>  
      <label className={`${styles.labels} ${styles.list_view}`}>
        <input type="radio" name="view" className={styles.switch_view_input} defaultChecked />
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(109 109 112)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-text-align-justify-icon lucide-text-align-justify"><path d="M3 5h18"/><path d="M3 12h18"/><path d="M3 19h18"/></svg>
        <span className={styles.label}>LIST</span>
      </label>
      <label className={`${styles.labels} ${styles.grid_view}`}>
        <input type="radio" name="view" className={styles.switch_view_input} />
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(109 109 112)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-grid-icon lucide-layout-grid"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
        <span className={styles.label}>GRID</span>
      </label>
    </div>
  )
}