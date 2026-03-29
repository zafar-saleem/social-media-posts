import Link from "next/link";
import styles from "./styles.module.css";

export const IslandNav = () => {
  return (
    <>
      <nav className={styles.nav}>
        <label className={styles.nav_label}>
          <input type="checkbox" />
          <Link href="/">
            <h1 className={styles.logo}>GO<sup>TM</sup></h1>
          </Link>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu">
            <path d="M4 5h16"/>
            <path d="M4 12h16"/>
            <path d="M4 19h16"/>
          </svg>
          <Link className={styles.button_cta} href="#">Get Started</Link>
        </label>
      </nav>
      <nav className={styles.nav_lists}>
        <ul className={styles.nav_list}>
          <li>
            <Link href="#">Services</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Projects</Link>
          </li>
          <li>
            <Link href="#">Plans</Link>
          </li>
          <li>
            <Link href="#">Get Started</Link>
          </li>
        </ul>
        <p>Copyright 2026 <Link href="#">Privacy Terms</Link></p>
      </nav>
    </>
  )
}