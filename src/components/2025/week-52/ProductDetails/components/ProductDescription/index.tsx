import Link from "next/link";
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
      {
        overview.map((text, index) => (<p key={index} className={`${styles.tab_desc} ${styles.tab_overview}`}>{text}</p>))
      }
      <ul className={`${styles.tab_desc} ${styles.tab_specs}`}>
        {specs.map((text, index) => <li key={index}>{text}</li>)}
      </ul>
      <div className={`${styles.tab_desc} ${`${styles.tab_reviews}`}`}>
        {
          reviews.map((item, index) => (
            <div key={index}>
              <p className={styles.review_text}>{item.text}</p>
              <p className={styles.review_author}>
                <Link href='#' className={styles.author_label}>
                  <span className={styles.avatar}>{item.avatar}</span>
                  <span>{item.author}</span>
                </Link>
                <span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="rgb(255 193 7)" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="rgb(255 193 7)" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="rgb(255 193 7)" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="rgb(255 193 7)" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="rgb(255 193 7)" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                </span>
                <span>{item.stars}/5</span>
              </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
