import Link from "next/link";
import styles from "./saas-actions.module.css";

export const ActionsList = () => {
  return (
    <div className={styles.actions_list}>
      <Link href="#" className={styles.actions_item}>
        <span className={styles.icon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(75 67 65)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
        </span>
        <span className={styles.label}>Navigate</span>
        <span className={styles.desc}>
          <span>Navigate to a new URL before scraping.</span>
        </span>
      </Link>
      <Link href="#" className={styles.actions_item}>
        <span className={styles.icon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(75 67 65)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mouse-pointer-click-icon lucide-mouse-pointer-click"><path d="M14 4.1 12 6"/><path d="m5.1 8-2.9-.8"/><path d="m6 12-1.9 2"/><path d="M7.2 2.2 8 5.1"/><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"/></svg>
        </span>
        <span className={styles.label}>Click</span>
        <span className={styles.desc}>
          <span>Click on an element to interact with it.</span>
        </span>
      </Link>
      <Link href="#" className={styles.actions_item}>
        <span className={styles.icon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(75 67 65)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-keyboard-icon lucide-keyboard"><path d="M10 8h.01"/><path d="M12 12h.01"/><path d="M14 8h.01"/><path d="M16 12h.01"/><path d="M18 8h.01"/><path d="M6 8h.01"/><path d="M7 16h10"/><path d="M8 12h.01"/><rect width="20" height="16" x="2" y="4" rx="2"/></svg>
        </span>
        <span className={styles.label}>Type</span>
        <span className={styles.desc}>
          <span>Type text into an input field.</span>
        </span>
      </Link>
      <Link href="#" className={styles.actions_item}>
        <span className={styles.icon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(75 67 65)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock9-icon lucide-clock-9"><path d="M12 6v6H8"/><circle cx="12" cy="12" r="10"/></svg>
        </span>
        <span className={styles.label}>Wait</span>
        <span className={styles.desc}>
          <span>Lorem ipsum dolor sit amet.</span>
        </span>
      </Link>
      <Link href="#" className={styles.actions_item}>
        <span className={styles.icon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(75 67 65)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mouse-icon lucide-mouse"><rect x="5" y="2" width="14" height="20" rx="7"/><path d="M12 6v4"/></svg>
        </span>
        <span className={styles.label}>Scroll</span>
        <span className={styles.desc}>
          <span>Scroll certain amount of pixels.</span>
        </span>
      </Link>
      <Link href="#" className={styles.actions_item}>
        <span className={styles.icon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(75 67 65)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wind-arrow-down-icon lucide-wind-arrow-down"><path d="M10 2v8"/><path d="M12.8 21.6A2 2 0 1 0 14 18H2"/><path d="M17.5 10a2.5 2.5 0 1 1 2 4H2"/><path d="m6 6 4 4 4-4"/></svg>
        </span>
        <span className={styles.label}>Press</span>
        <span className={styles.desc}>
          <span>Press a key on the keyboard.</span>
        </span>
      </Link>
      <Link href="#" className={styles.actions_item}>
        <span className={styles.icon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(75 67 65)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-maximize-icon lucide-maximize"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>
        </span>
        <span className={styles.label}>Screenshot</span>
        <span className={styles.desc}>
          <span>Take a screenshot of the current page.</span>
        </span>
      </Link>
      <Link href="#" className={styles.actions_item}>
        <span className={styles.icon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(75 67 65)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-fullscreen-icon lucide-fullscreen"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><rect width="10" height="8" x="7" y="8" rx="1"/></svg>
        </span>
        <span className={styles.label}>Scrape</span>
        <span className={styles.desc}>
          <span>Lorem ipsum dolor sit amet.</span>
        </span>
      </Link>
    </div>
  )
}