import styles from "../../Note.module.css";

export const Header = () => (
  <header className={styles.notes_header}>
    <span className={styles.icon}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(99 115 130)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notebook-pen-icon lucide-notebook-pen"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg>
    </span>
    <h1 className={styles.header_title}>Notes</h1>
    <button className={styles.add_button}>
      <span className={styles.icon}>+</span>
      <span className={styles.button_label}>Add Notes</span>
    </button>
  </header>
)
