import styles from "./styles.module.css";

export const ContextMenu = () => {
  return (
    <label className={styles.button}>
      <input type="checkbox" className={styles.button_checkbox} />
      <button className={`${styles.icon} ${styles.icon_delete}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(170 170 170)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
      </button>
      <button className={`${styles.icon} ${styles.icon_share}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(170 170 170)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-input-icon lucide-folder-input"><path d="M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"/><path d="M2 13h10"/><path d="m9 16 3-3-3-3"/></svg>
      </button>
      <button className={`${styles.icon} ${styles.icon_edit}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(170 170 170)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-pen-line-icon lucide-file-pen-line"><path d="m18.226 5.226-2.52-2.52A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.351"/><path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><path d="M8 18h1"/></svg>
      </button>
      <button className={`${styles.icon} ${styles.icon_star}`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(170 170 170)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
      </button>
      <button className={styles.button_label}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(170 170 170)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ellipsis-icon lucide-ellipsis"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      </button>
      <button className={styles.button_close}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(170 170 170)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
    </label>
  )
}