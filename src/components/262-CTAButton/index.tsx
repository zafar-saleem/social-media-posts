import Link from "next/link";
import styles from "./styles.module.css";

export const CTAButton = () => {
  return (
    <Link href="#" className={styles.button}>
      <span className={styles.text}>Let's Talk</span>
    </Link>
  )
}