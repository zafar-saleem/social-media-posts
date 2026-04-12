import Link from "next/link";
import styles from "./styles.module.css";

export const MultiActionDropdown = () => {
  return (
    <div className={styles.container}>
      <label className={styles.button}>
        <input type="checkbox" />
        <span>Publish</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(196 196 196)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up-icon lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>
      </label>
      <div className={styles.menu}>
        <p className={styles.text}>
          <span>Customer Support Agent</span>
          <span className={`${styles.text_color_02} ${styles.right}`}>V1.2</span>
        </p>
        <div>
          <button className={styles.button}>
            <span>Update Workflow</span>
          </button>
        </div>
        <p className={`${styles.text} ${styles.text_color_02}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(144 144 144)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock8-icon lucide-clock-8"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l-4 2"/></svg>
          12m ago by Ethan
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(156 156 156)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`${styles.right} lucide lucide-chevron-right-icon lucide-chevron-right`}><path d="m9 18 6-6-6-6"/></svg>
        </p>
        <div>
          <button className={styles.button_action}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(0 97 230)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play-icon lucide-play"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/></svg>
            <span>Run Workflow</span>
          </button>
        </div>
        <Link href={`#`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="rgb(156 156 156)" stroke="rgb(156 156 156)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock8-icon lucide-clock-8"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l-4 2" stroke="rgb(255 255 255)"/></svg>
          <span>View Execution Log</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(156 156 156)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`${styles.right} lucide lucide-chevron-right-icon lucide-chevron-right`}><path d="m9 18 6-6-6-6"/></svg>
        </Link>
        <Link href={`#`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(167 142 124)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard-icon lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
          <span>Generate API Endpoint</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(156 156 156)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`${styles.right} lucide lucide-chevron-right-icon lucide-chevron-right`}><path d="m9 18 6-6-6-6"/></svg>
        </Link>
      </div>
    </div>
  )
}
