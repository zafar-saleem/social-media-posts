import styles from "./styles.module.css";

export const OverviewWidget = () => {
  return (
    <>
      <div className={styles.overview}>
        <div className={styles.overview_tabs}>
          <label className={styles.tab_label}>
            <input type="radio" name="tab" className={styles.reminders} defaultChecked />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-sync-icon lucide-calendar-sync"><path d="M11 10v4h4"/><path d="m11 14 1.535-1.605a5 5 0 0 1 8 1.5"/><path d="M16 2v4"/><path d="m21 18-1.535 1.605a5 5 0 0 1-8-1.5"/><path d="M21 22v-4h-4"/><path d="M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3"/><path d="M3 10h4"/><path d="M8 2v4"/></svg>
            <span className={styles.tab_text}>Reminders</span>
          </label>
          <label className={styles.tab_label}>
            <input type="radio" name="tab" className={styles.tasks} />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-todo-icon lucide-list-todo"><path d="M13 5h8"/><path d="M13 12h8"/><path d="M13 19h8"/><path d="m3 17 2 2 4-4"/><rect x="3" y="4" width="6" height="6" rx="1"/></svg>
            <span className={styles.tab_text}>Daily Tasks</span>
          </label>
        </div>




        <div className={styles.reminders}>
          <div className={styles.overview_header}>
            <span className={styles.overview_title}>Reminders</span>
            <span className={styles.overview_subtitle}>You have <mark className={styles.highlight}>2 new reminders</mark> today</span>
          </div>
          <div className={styles.reminders_list}>
            <div className={styles.list_labels}>
              <span className={styles.label}>Today</span>
              <span className={styles.label}>11AM</span>
            </div>
            <div className={styles.values}>
              <div className={styles.remiders_value}>
                <div className={styles.text}>Farrel's Birthday</div>
                <p className={styles.avatar}>F</p>
              </div>
              <div className={styles.remiders_value}>
                <div className={styles.text}>Meeting with a client</div>
                <p className={styles.badge}>30 min</p>
              </div>
            </div>
          </div>
        </div>
        
        
        
        
        
        
        
        <div className={styles.tasks}>
          <div className={styles.overview_header}>
            <span className={styles.overview_title}>Daily Tasks</span>
            <span className={styles.overview_subtitle}>You have <mark className={styles.highlight}>2 tasks</mark> left</span>
          </div>
          <div className={styles.reminders_list}>
            <div className={styles.values}>
              <div className={styles.remiders_value}>
                <input type="checkbox" className={styles.checkbox} />
                <div className={styles.text}>Buy another Lambo</div>
              </div>
              <div className={styles.remiders_value}>
                <input type="checkbox" className={styles.checkbox} />
                <div className={styles.text}>Find a holiday trip</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}