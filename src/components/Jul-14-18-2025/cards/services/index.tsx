import styles from "./feature.module.css";

export const ServicesCard = () => {
  return (
    <div className={styles.card}>
      <header className={styles.card_header}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-sync-icon lucide-calendar-sync"><path d="M11 10v4h4" className={styles.rotate}/><path className={styles.rotate} d="m11 14 1.535-1.605a5 5 0 0 1 8 1.5"/><path d="M16 2v4"/><path d="m21 18-1.535 1.605a5 5 0 0 1-8-1.5"/><path d="M21 22v-4h-4"/><path d="M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3"/><path d="M3 10h4"/><path d="M8 2v4"/></svg>
        <h2 className={styles.card_title}>Internal Task Automation</h2>
      </header>
      <article>
        <p className={styles.card_content}>
          We streamline repetitive team tasks using AI and no code tools, saving hours every week without hiring.
        </p>
        <ul className={styles.card_checklist}>
          <li className={styles.card_checklist_item}>
            <span className={styles.icon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            </span>
            <span className={styles.checklist_text}>Task Automation with zapier/make + ai</span>
          </li>
          <li className={styles.card_checklist_item}>
            <span className={styles.icon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            </span>
            <span className={styles.checklist_text}>Workflow mapping & optimization</span>
          </li>
          <li className={styles.card_checklist_item}>
            <span className={styles.icon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            </span>
            <span className={styles.checklist_text}>Team onboarding documentation</span>
          </li>
        </ul>
      </article>
      <footer className={styles.card_footer}>
        <div className={styles.card_price}>
          <span className={styles.price}>$5997</span><span className={styles.price_occurence}>/fixed</span>
        </div>
        <div className={styles.button}>
          <button className={styles.btn}>
            <span>Book</span> <span>Free</span> <span>Call</span>
          </button>
        </div>
      </footer>
    </div>
  )
}
