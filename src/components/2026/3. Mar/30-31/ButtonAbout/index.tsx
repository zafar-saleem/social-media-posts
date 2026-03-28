import Link from "next/link";
import styles from "./styles.module.css";

export const AboutButton = () => {
  return (
    <Link href={`#`} className={styles.about_btn}>
      <span className={styles.text}>About</span>
    </Link>
  )
}