import styles from "./styles.module.css";

export const ProductDescriptions = ({ overview, specs, reviews }) => {
  return (
    <div className={styles.product_details}>
      <div className={styles.tabs_container}>
        <label className={styles.tab_overview}>
          <input type="radio" name="product_desc" className={styles.tab_button} defaultChecked />
          <span className={styles.tab_text}>Overview</span>
        </label>
        <label className={styles.tab_specs}>
          <input type="radio" name="product_desc" className={styles.tab_button} />
          <span className={styles.tab_text}>Specifications</span>
        </label>
        <label className={styles.tab_reviews}>
          <input type="radio" name="product_desc" className={styles.tab_button} />
          <span className={styles.tab_text}>Reviews</span>
        </label>
      </div>
      <p className={`${styles.tab_desc} ${styles.tab_overview}`}>{overview}</p>
      <p className={`${styles.tab_desc} ${styles.tab_specs}`}>{specs}</p>
      <div className={`${styles.tab_desc} ${`${styles.tab_reviews}`}`}>
        {
          reviews.map((item, index) => (
            <div key={index}>
              <p className={styles.review_text}>{item.text}</p>
              <span className={styles.review_author}>{item.author}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}
