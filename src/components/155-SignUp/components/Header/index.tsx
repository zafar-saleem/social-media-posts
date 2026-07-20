import styles from "../../SignUp.module.css";

export const Header = () => {
  return (
    <header className={styles.form_header}>
      <h1 className={styles.form_title}>Create an account</h1>
      <p className={styles.form_info}>Try it for free, cancel anytime</p>
    </header>
  )
}
