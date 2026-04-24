import styles from "./styles.module.css";

export const InputWithContext = () => {
  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <article className={styles.group_article}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(91 90 95)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-pie-icon lucide-chart-pie"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"/><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/></svg>
          <div className={styles.box}>
            <h1 className={styles.group_title}>Track progress</h1>
            <p className={styles.group_text}>On, ahead, or behind track</p>
          </div>
        </article>
        <article className={styles.group_article}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(91 90 95)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-search-icon lucide-folder-search"><path d="M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"/><path d="m21 21-1.9-1.9"/><circle cx="17" cy="17" r="3"/></svg>
          <div className={styles.box}>
            <h1 className={styles.group_title}>Monitor status</h1>
            <p className={styles.group_text}>Stay updated on any blockers or active work</p>
          </div>
          
        </article>
        <article className={styles.group_article}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(91 90 95)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-sync-icon lucide-calendar-sync"><path d="M11 10v4h4"/><path d="m11 14 1.535-1.605a5 5 0 0 1 8 1.5"/><path d="M16 2v4"/><path d="m21 18-1.535 1.605a5 5 0 0 1-8-1.5"/><path d="M21 22v-4h-4"/><path d="M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3"/><path d="M3 10h4"/><path d="M8 2v4"/></svg>
          <div className={styles.box}>
            <h1 className={styles.group_title}>Adjust priorities</h1>
            <p className={styles.group_text}>Identify tasks that need to be rescheduled</p>
          </div>
        </article>
      </div>
      <textarea className={styles.textarea} placeholder="Summerize this project for the team...">
      </textarea>
      <div className={styles.actions}>
        <button className={`${styles.button}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(110 111 117)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paperclip-icon lucide-paperclip"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"/></svg>
        </button>
        <button className={`${styles.button}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(110 111 117)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic-icon lucide-mic"><path d="M12 19v3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><rect x="9" y="2" width="6" height="13" rx="3"/></svg>
        </button>
        <button className={`${styles.button}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(244 244 251)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-icon lucide-arrow-up"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
        </button>
      </div>
    </div>
  )
}