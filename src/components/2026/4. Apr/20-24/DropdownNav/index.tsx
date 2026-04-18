import Link from "next/link";
import styles from "./styles.module.css";

export const DropdownNav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li className={styles.list_item}>
          <Link className={styles.item_link} href={`#`}>Blog</Link>
        </li>
        <li className={styles.list_item}>
          <Link className={`${styles.item_link} ${styles.link_features}`} href={`#`}>
            <span>Features</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(234 233 233)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up-icon lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>
          </Link>
        </li>
        <li className={styles.list_item}>
          <Link className={styles.item_link} href={`#`}>Docs</Link>
        </li>
      </ul>
      <div className={styles.dropdown_nav}>
        <ul className={styles.dropdown_list}>
          <li className={styles.dropdown_item}>
            <Link className={`${styles.analytics_link} ${styles.item_list}`} href="#">Analytics</Link>
          </li>
          <li className={styles.dropdown_item}>
            <Link className={`${styles.realtime_link} ${styles.item_list}`} href="#">Realtime</Link>
          </li>
          <li className={styles.dropdown_item}>
            <Link className={`${styles.performance_link} ${styles.item_list}`} href="#">Performance</Link>
          </li>
          <li>
            <Link className={`${styles.profiles_link} ${styles.item_list}`} href="#">Profiles</Link>
          </li>
        </ul>
        <div className={styles.info_container}>
          <div className={styles.slider}>
            <div className={`${styles.analytics} ${styles.info_copy}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-spline-icon lucide-chart-spline"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"/></svg>
              <span className={styles.title}>Analytics</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, dolore.</p>
            </div>
            <div className={`${styles.realtime} ${styles.info_copy}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-podcast-icon lucide-podcast"><path d="M13 17a1 1 0 1 0-2 0l.5 4.5a0.5 0.5 0 0 0 1 0z" fill="currentColor"/><path d="M16.85 18.58a9 9 0 1 0-9.7 0"/><path d="M8 14a5 5 0 1 1 8 0"/><circle cx="12" cy="11" r="1" fill="currentColor"/></svg>
              <span className={styles.title}>Realtime</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, aliquam?</p>
            </div>
            <div className={`${styles.performance} ${styles.info_copy}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-drum-icon lucide-drum"><path d="m2 2 8 8"/><path d="m22 2-8 8"/><ellipse cx="12" cy="9" rx="10" ry="5"/><path d="M7 13.4v7.9"/><path d="M12 14v8"/><path d="M17 13.4v7.9"/><path d="M2 9v8a10 5 0 0 0 20 0V9"/></svg>
              <span className={styles.title}>Performance</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, eius?</p>
            </div>
            <div className={`${styles.profiles} ${styles.info_copy}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-star-icon lucide-user-star"><path d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"/><path d="M8 15H7a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/></svg>
              <span className={styles.title}>Profiles</span>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, officia?</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}