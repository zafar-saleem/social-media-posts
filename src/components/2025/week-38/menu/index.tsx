import Link from "next/link";
import styles from "./menu.module.css";

export const Menu = () => {
  return (
    <nav className={styles.menu_navbar}>
      <ul className={styles.navbar}>
        <li className={styles.menu_item}>
          <Link href="#" className={styles.active}>
            <span className={styles.icon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(135 135 137)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-check-icon lucide-list-check"><path d="M16 5H3"/><path d="M16 12H3"/><path d="M11 19H3"/><path d="m15 18 2 2 4-4"/></svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(20 20 20)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-check-icon lucide-list-check"><path d="M16 5H3"/><path d="M16 12H3"/><path d="M11 19H3"/><path d="m15 18 2 2 4-4"/></svg>
            </span>
            <span className={styles.label}>Activity</span>
          </Link>
        </li>
        <li className={styles.menu_item}>
          <Link href="#">
            <span className={styles.icon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(135 135 137)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-git2-icon lucide-folder-git-2"><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"/><circle cx="13" cy="12" r="2"/><path d="M18 19c-2.8 0-5-2.2-5-5v8"/><circle cx="20" cy="19" r="2"/></svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(20 20 20)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-git2-icon lucide-folder-git-2"><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"/><circle cx="13" cy="12" r="2"/><path d="M18 19c-2.8 0-5-2.2-5-5v8"/><circle cx="20" cy="19" r="2"/></svg>
            </span>
            <span className={styles.label}>Projects</span>
          </Link>
        </li>
        <li className={styles.menu_item}>
          <Link href="#">
            <span className={styles.icon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(135 135 137)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-check2-icon lucide-file-check-2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m3 15 2 2 4-4"/></svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(0 0 0)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-check2-icon lucide-file-check-2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m3 15 2 2 4-4"/></svg>
            </span>
            <span className={styles.label}>Tasks</span>
          </Link>
        </li>
        <li className={styles.menu_item}>
          <Link href="#">
            <span className={styles.icon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(135 135 137)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-coins-icon lucide-hand-coins"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></svg>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(0 0 0)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hand-coins-icon lucide-hand-coins"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></svg>
            </span>
            <span className={styles.label}>Payroll</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
