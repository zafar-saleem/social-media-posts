import Link from "next/link";
import styles from "./styles.module.css";

export const Menu = () => {
  return (
    <>
      <label className={styles.button_label}>
        <input type="checkbox" className={styles.button_menu} />
        <div className={styles.box}>
          <svg width="24" height="24" viewBox="5 5 14 14" fill="none" stroke="rgb(19 19 19)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot-icon lucide-dot"><circle cx="12.1" cy="12.1" r="1"/></svg>
          <svg width="24" height="24" viewBox="5 5 14 14" fill="none" stroke="rgb(19 19 19)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot-icon lucide-dot"><circle cx="12.1" cy="12.1" r="1"/></svg>
          <svg width="24" height="24" viewBox="5 5 14 14" fill="none" stroke="rgb(19 19 19)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot-icon lucide-dot"><circle cx="12.1" cy="12.1" r="1"/></svg>
          <svg width="24" height="24" viewBox="5 5 14 14" fill="none" stroke="rgb(19 19 19)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot-icon lucide-dot"><circle cx="12.1" cy="12.1" r="1"/></svg>
          <svg width="24" height="24" viewBox="5 5 14 14" fill="none" stroke="rgb(19 19 19)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot-icon lucide-dot"><circle cx="12.1" cy="12.1" r="1"/></svg>
          <svg width="24" height="24" viewBox="5 5 14 14" fill="none" stroke="rgb(19 19 19)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot-icon lucide-dot"><circle cx="12.1" cy="12.1" r="1"/></svg>
          <svg width="24" height="24" viewBox="5 5 14 14" fill="none" stroke="rgb(19 19 19)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot-icon lucide-dot"><circle cx="12.1" cy="12.1" r="1"/></svg>
          <svg width="24" height="24" viewBox="5 5 14 14" fill="none" stroke="rgb(19 19 19)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot-icon lucide-dot"><circle cx="12.1" cy="12.1" r="1"/></svg>
          <svg width="24" height="24" viewBox="5 5 14 14" fill="none" stroke="rgb(19 19 19)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot-icon lucide-dot"><circle cx="12.1" cy="12.1" r="1"/></svg>
        </div>
        <div className={styles.menu_items}>
          <div className={styles.group}>
            <Link href="#">Work</Link>
            <Link href="#">Approach</Link>
            <Link href="#">Contact</Link>
          </div>
          <div className={styles.separator} />
          <div className={`${styles.group} ${styles.small}`}>
            <span className={styles.label}>Resources</span>
            <Link href="#">Careers</Link>
            <Link href="#">Terms of Services</Link>
            <Link href="#">Privacy Policy</Link>
          </div>
        </div>
      </label>
    </>
  )
}
