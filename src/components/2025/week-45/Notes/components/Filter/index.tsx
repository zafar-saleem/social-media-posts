import styles from "../../Note.module.css";

export const Filter = () => (
  <section className={styles.notes_filter}>
    <button>Task: All</button>
    <button>Time: All</button>
    <button>Status: All</button>
  </section>
)
