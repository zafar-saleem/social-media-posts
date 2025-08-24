import Link from "next/link";
import styles from "./bio.module.css";

export const Bio = () => {
  return (
    <div className={styles.bio}>
      <div className={styles.bio_top_slide}>
        <div className={styles.metadata}>
          <div>
            <span className={styles.name}>Zafar Saleem</span>
            <span className={styles.role}>CEO</span>
          </div>
          <div className={styles.controls}>
            <label className={styles.btn_toggle}>
              <span className={styles.btn_label}>
                <span className={`${styles.state} ${styles.label_show_state}`}>SHOW BIO</span>
                <span className={`${styles.state} ${styles.label_hide_state}`}>HIDE BIO</span>
              </span>
              <input type="checkbox" className={styles.button} />
              <span className={styles.icon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(20 22 31)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`lucide lucide-chevron-down-icon lucide-chevron-down ${styles.arrow}`}>
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className={styles.bio_bottom_slide}>
        <p>
          Leading the agency's mission to blend local market creativity with cutting edge AI automation that helps businesses work smarter and scale faster.
        </p>
        <div className={styles.socials}>
          <Link href="#" className={styles.socials_linkedin}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(159 255 0)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(159 255 0)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </Link>
          <Link href="#" className={styles.socials_insta}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(159 255 0)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}