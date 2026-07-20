import Link from "next/link";
import styles from "./tooltip.module.css";

export const ExpandableTooltip = () => {
  return (
    <div className={styles.container}>
      <button>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(143 143 143)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-compass-icon lucide-compass"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/><circle cx="12" cy="12" r="10"/></svg>
      </button>
      <span className={`${styles.tooltip} ${styles.tooltip_analytics}`}>
        <span className={`${styles.tooltip_title}`}>Analytics</span>
        <p>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, fuga?</span>
          <Link href="#">Learn more</Link>
        </p>
      </span>
      <button>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(143 143 143)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-atom-icon lucide-atom"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"/></svg>
      </button>
      <span className={`${styles.tooltip} ${styles.tooltip_partner}`}>
        <span className={styles.tooltip_title}>Partner program</span>
        <p>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, fuga?</span>
          <Link href="#">Learn more</Link>
        </p>
      </span>
    </div>
  )
}