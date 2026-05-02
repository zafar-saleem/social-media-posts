import styles from "./styles.module.css";

export const SelectionList = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <label className={styles.label}>
          <input type="checkbox" className={styles.checkbox} />
          <span className={styles.text}>Teamspaces</span>
        </label>
      </li>
      <li className={styles.item}>
        <label className={styles.label}>
          <input type="checkbox" className={styles.checkbox} />
          <span className={styles.text}>Recents</span>
        </label>
      </li>
      <li className={styles.item}>
        <label className={styles.label}>
          <input type="checkbox" className={styles.checkbox} />
          <span className={styles.text}>Favorites</span>
        </label>
      </li>
      <li className={styles.item}>
        <label className={styles.label}>
          <input type="checkbox" className={styles.checkbox} />
          <span className={styles.text}>Shared</span>
        </label>
      </li>
      <li className={styles.item}>
        <label className={styles.label}>
          <input type="checkbox" className={styles.checkbox} />
          <span className={styles.text}>Private</span>
        </label>
      </li>
    </ul>
  )
}