import styles from "./styles.module.css";

export const MultiActionButton = () => {
  return (
    <label className={styles.button}>
      <input type="checkbox" />
      <span className={styles.button_label}>Create new</span>
      <span className={styles.button_icon}>+</span>
      <section className={styles.controls}>
        <button className={styles.action}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(140 140 140)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-folder-kanban-icon lucide-folder-kanban">
              <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
              <path d="M8 10v4"/>
              <path d="M12 10v2"/>
              <path d="M16 10v6"/>
          </svg>
          <span className={styles.action_label}>Project</span>
        </button>
        <button className={styles.action}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgb(140 140 140)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notebook-icon lucide-notebook"><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M16 2v20"/></svg>
          <span className={styles.action_label}>Notebook</span>
        </button>
        <button className={styles.action}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgb(140 140 140)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scroll-text-icon lucide-scroll-text"><path d="M15 12h-5"/><path d="M15 8h-5"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/></svg>
          <span className={styles.action_label}>Notes</span>
        </button>
        <button className={styles.action}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgb(140 140 140)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy-icon lucide-trophy"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"/><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"/><path d="M18 9h1.5a1 1 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"/><path d="M6 9H4.5a1 1 0 0 1 0-5H6"/></svg>
          <span className={styles.action_label}>Goal</span>
        </button>
        <button className={styles.action}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgb(140 140 140)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-milestone-icon lucide-milestone"><path d="M12 13v8"/><path d="M12 3v3"/><path d="M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"/></svg>
          <span className={styles.action_label}>Milestone</span>
        </button>
        <button className={styles.action}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgb(140 140 140)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-check-icon lucide-calendar-check"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/></svg>
          <span className={styles.action_label}>Event</span>
        </button>
      </section>
    </label>
  )
}