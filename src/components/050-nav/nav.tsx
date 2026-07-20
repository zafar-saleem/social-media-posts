import styles from "./nav.module.css";
import Link from "next/link"

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="about">About</Link></li>
      </ul>
    </nav>
  )
}