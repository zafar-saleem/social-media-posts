import styles from "./styles.module.css";

export const HamburgerMenu = () => {
  return (
    <label className={styles.btn_menu}>
      <input type="checkbox" />
      <div className={styles.box}>
        <svg
          width="34" height="34"
          viewBox="0 0 24 24" fill="none"
          stroke="rgb(4 4 4)" stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className={`lucide lucide-menu-icon lucide-menu ${styles.icon}`}>
          <path d="M4 5h16"/>
          <path d="M4 12h16"/>
          <path d="M4 19h16"/>
        </svg>
      </div>
    </label>
  )
}