import styles from "./toggle-sidebar.module.css";

export const ToggleSidebar = () => {
  return (
    <>
      <button className={styles.button}>
        <span className={styles.separator} />
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(85 85 85)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </button>
      <span className={styles.tooltip}>Hide Sidebar</span>
    </>
  )
}