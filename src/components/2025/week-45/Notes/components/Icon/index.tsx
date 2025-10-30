import styles from "../../Note.module.css";

export const Icon = () => (
  <span className={styles.icon}>
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgb(99 115 130)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-right-icon lucide-chevron-right">
        <path d="m9 18 6-6-6-6"/>
    </svg>
  </span>
)
