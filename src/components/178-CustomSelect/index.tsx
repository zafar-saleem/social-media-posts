import styles from "./styles.module.css";

export const CustomSelect = () => {
  return (
    <>
      <select className={styles.select}>
        <button>
          <selectedcontent></selectedcontent>
        </button>
        <option className={`${styles.option_line} ${styles.select_option}`}>
          <div className={styles.option_item}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(107 107 111)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-line-icon lucide-chart-line"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9-5 5-4-4-3 3"/></svg>
            <span className={styles.item_label}>Line Chart</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(107 107 111)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
          </div>
        </option>
        <option className={`${styles.option_bar} ${styles.select_option}`}>
          <div className={styles.option_item}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(107 107 111)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-bar-icon lucide-chart-bar"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16h8"/><path d="M7 11h12"/><path d="M7 6h3"/></svg>
            <span className={styles.item_label}>Bar Chart</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(107 107 111)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
          </div>
        </option>
        <option className={`${styles.option_donut} ${styles.select_option}`}>
          <div className={styles.option_item}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(107 107 111)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-pie-icon lucide-chart-pie"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"/><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/></svg>
            <span className={styles.item_label}>Donut Chart</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(107 107 111)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
          </div>
        </option>
      </select>
      <section className={`${styles.line_tooltip} ${styles.tooltip}`}>
        <div>
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgb(71 108 170)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-area-icon lucide-chart-area"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"/></svg>
        </div>
        <p>Best to show trends or changes over time</p>
      </section>
      <section className={`${styles.bar_tooltip} ${styles.tooltip}`}>
        <div>
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgb(71 108 170)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-column-stacked-icon lucide-chart-column-stacked"><path d="M11 13H7"/><path d="M19 9h-4"/><path d="M3 3v16a2 2 0 0 0 2 2h16"/><rect x="15" y="5" width="4" height="12" rx="1"/><rect x="7" y="8" width="4" height="9" rx="1"/></svg>
        </div>
        <p>Best to display comparisons between categories</p>
      </section>
      <section className={`${styles.donut_tooltip} ${styles.tooltip}`}>
        <div>
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgb(71 108 170)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-pie-icon lucide-chart-pie"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"/><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/></svg>
        </div>
        <p>Display data through a circular visualization</p>
      </section>
    </>
  )
}