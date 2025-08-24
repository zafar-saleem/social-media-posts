import Link from "next/link";
import styles from "./filter.module.css";

export const Filter = () => {
  return (
    <>
      <button className={styles.button_filter} popoverTarget="menu_layer_one">
        <span className={styles.button_icon}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(181 181 181)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-filter-icon lucide-list-filter"><path d="M3 6h18"/><path d="M7 12h10"/><path d="M10 18h4"/></svg>        
        </span>
        <span className={styles.button_label}>Filter</span>
      </button>




      <ul className={`${styles.filter_menu} ${styles.filter_layer_one}`} id="menu_layer_one" popover="auto">
        <li>
          <input type="search" placeholder="Filter..." />
        </li>
        <li>
          <Link href="#">
            <span className={styles.icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(181 181 181)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
            </span>
            <span className={styles.label}>AI Filter</span>
          </Link>
        </li>
        <li>
          <button popoverTarget="status_popover">
            <span className={styles.icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(181 181 181)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-dashed-icon lucide-circle-dashed"><path d="M10.1 2.182a10 10 0 0 1 3.8 0"/><path d="M13.9 21.818a10 10 0 0 1-3.8 0"/><path d="M17.609 3.721a10 10 0 0 1 2.69 2.7"/><path d="M2.182 13.9a10 10 0 0 1 0-3.8"/><path d="M20.279 17.609a10 10 0 0 1-2.7 2.69"/><path d="M21.818 10.1a10 10 0 0 1 0 3.8"/><path d="M3.721 6.391a10 10 0 0 1 2.7-2.69"/><path d="M6.391 20.279a10 10 0 0 1-2.69-2.7"/></svg>
            </span>
            <span className={styles.label}>Status</span>
          </button>
        </li>
        <li>
          <button popoverTarget="assignee_popover">
            <span className={styles.icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(181 181 181)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-user-icon lucide-circle-user"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>
            </span>
            <span className={styles.label}>Assignee</span>
          </button>
        </li>
      </ul>




      <ul className={`${styles.filter_menu} ${styles.filter_status}`} id="status_popover" popover="auto">
        <li>
          <input type="search" placeholder="Filter..." />
        </li>
        <li>
          <label>
            <input type="checkbox" />
          </label>
          <button>
            <span className={styles.icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(181 181 181)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-dashed-icon lucide-circle-dashed"><path d="M10.1 2.182a10 10 0 0 1 3.8 0"/><path d="M13.9 21.818a10 10 0 0 1-3.8 0"/><path d="M17.609 3.721a10 10 0 0 1 2.69 2.7"/><path d="M2.182 13.9a10 10 0 0 1 0-3.8"/><path d="M20.279 17.609a10 10 0 0 1-2.7 2.69"/><path d="M21.818 10.1a10 10 0 0 1 0 3.8"/><path d="M3.721 6.391a10 10 0 0 1 2.7-2.69"/><path d="M6.391 20.279a10 10 0 0 1-2.69-2.7"/></svg>
            </span>
            <span className={styles.label}>Backlog</span>
          </button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
          </label>
          <button>
            <span className={styles.icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(181 181 181)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-icon lucide-circle"><circle cx="12" cy="12" r="10"/></svg>
            </span>
            <span className={styles.label}>Todo</span>
          </button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
          </label>
          <button>
            <span className={styles.icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(243 200 2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-loader-pinwheel-icon lucide-loader-pinwheel"><path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0"/><path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6"/><path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6"/><circle cx="12" cy="12" r="10"/></svg>
            </span>
            <span className={styles.label}>In Progress</span>
          </button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
          </label>
          <button>
            <span className={styles.icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="rgb(108 117 209)" stroke="rgb(108 117 209)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check">
                <circle cx="12" cy="12" r="10"/>
                <path d="m9 12 2 2 4-4" stroke="rgb(255 255 255)" />
              </svg>
            </span>
            <span className={styles.label}>Done</span>
          </button>
        </li>
      </ul>
      
      
      
      
      
      
      <ul className={`${styles.filter_menu} ${styles.filter_assignee}`} id="assignee_popover" popover="auto">
        <li>
          <input type="search" placeholder="Filter..." />
        </li>
        <li>
          <label>
            <input type="checkbox" />
          </label>
          <button>
            <span className={styles.icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(104 104 104)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-minus-icon lucide-user-round-minus"><path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="M22 19h-6"/></svg>
            </span>
            <span className={styles.label}>No assignee</span>
          </button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
          </label>
          <button>
            <span className={styles.icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(104 104 104)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-user-icon lucide-circle-user"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>
            </span>
            <span className={styles.label}>Current user</span>
          </button>
        </li>
      </ul>
    </>
  )
}
