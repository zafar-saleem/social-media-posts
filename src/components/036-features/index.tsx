import styles from "./styles.module.css"

export const Feature = () => {
  return (
    <div className={styles.feature}>
      <span>
        There's
        <span className={styles.cards_container}>
          <div className={styles.card}>
            Card 1
          </div>
          <div className={styles.card}>
            Card 2
          </div>
        </span>
        More</span>
    </div>
  )
}