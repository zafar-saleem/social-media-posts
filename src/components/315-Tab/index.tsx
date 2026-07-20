import styles from "./styles.module.css";

export const Tabs = () => {
  return (
    <div className={styles.tabs}>
      <label className={styles.tabs_label}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(173 173 173)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-off-icon lucide-eye-off"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/></svg>
        <span className={styles.label}>Glib mliib</span>
        <input type="radio" name="tab" defaultChecked />
      </label>
      <label className={styles.tabs_label}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(173 173 173)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notepad-text-icon lucide-notepad-text"><path d="M8 2v4"/><path d="M12 2v4"/><path d="M16 2v4"/><rect width="16" height="18" x="4" y="4" rx="2"/><path d="M8 10h6"/><path d="M8 14h8"/><path d="M8 18h5"/></svg>
        <span className={styles.label}>Gooth mliib</span>
        <input type="radio" name="tab" />
      </label>
      <label className={styles.tabs_label}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(173 173 173)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles-icon lucide-sparkles"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/></svg>
        <span className={styles.label}>Gobiimolt</span>
        <input type="radio" name="tab" />
      </label>
    </div>
  )
}
