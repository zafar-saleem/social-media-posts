import styles from "./styles.module.css";

export const MultiFilters = () => {
  return (
    <div className={styles.container}>
      <label className={styles.filter_label}>
        <input type="checkbox" className={styles.label_checkbox} />
        <span className={styles.label_text}>Playlist</span>
      </label>
      <label className={styles.filter_label}>
        <input type="checkbox" className={styles.label_checkbox} />
        <span className={styles.label_text}>Albums</span>
      </label>
      <label className={styles.filter_label}>
        <input type="checkbox" className={styles.label_checkbox} />
        <span className={styles.label_text}>Podcasts</span>
      </label>
      <label className={styles.filter_label}>
        <input type="checkbox" className={styles.label_checkbox} />
        <span className={styles.label_text}>Artists</span>
      </label>
      <label className={styles.filter_label}>
        <input type="checkbox" className={styles.label_checkbox} />
        <span className={styles.label_text}>Downloaded</span>
      </label>
    </div>
  )
}