import styles from "./styles.module.css";

export const PricingCard = () => {
  return (
    <form className={styles.container}>
      <div className={styles.controls}>
        <label className={styles.controls_label}>
          <input type="radio" className={`${styles.label_radio} ${styles.radio_framer}`} name="price" />
          <article className={styles.radio_article}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor-icon lucide-monitor"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
            <h3 className={styles.article_title}>Framer Development</h3>
            <p className={styles.article_text}>Have a Design? I'll Built it.</p>
          </article>
        </label>
        <label className={styles.controls_label}>
          <input type="radio" className={`${styles.radio_website} ${styles.label_radio}`} name="price" />
          <article className={styles.radio_article}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-ruler-icon lucide-pencil-ruler"><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"/><path d="m8 6 2-2"/><path d="m18 16 2-2"/><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
            <h3 className={styles.article_title}>Website Design</h3>
            <p className={styles.article_text}>I'll design & Build your site from Scratch.</p>
          </article>
        </label>
      </div>



      <div className={`${styles.slider} ${styles.framer}`}>
        <span className={styles.text}>From</span>
        <span className={styles.large_text}>$2000</span>
        <div className={styles.actions}>
          <button type="button" className={styles.button_basic}>Ask a question</button>
          <button type="button" className={styles.button_brand}>Start a project</button>
        </div>
        <p className={styles.copy}>Thanks for shopping</p>
        <div className={styles.cut} />
      </div>
      
      <div className={`${styles.slider} ${styles.website}`}>
        <span className={styles.text}>From</span>
        <span className={styles.large_text}>$4000</span>
        <div className={styles.actions}>
          <button type="button" className={styles.button_basic}>Ask a question</button>
          <button type="button" className={styles.button_brand}>Start a project</button>
        </div>
        <p className={styles.copy}>Thanks for shopping</p>
        <div className={styles.cut} />
      </div>
    </form>
  )
}