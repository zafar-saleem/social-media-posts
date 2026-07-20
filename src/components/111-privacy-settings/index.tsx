import styles from "./privacy.module.css";

export const PrivacySettings = () => {
  return (
    <form className={styles.container}>
      <header className={styles.header}>
        <span className={styles.header_title}>Project visibility settings</span>
        <button className={styles.btn_close} type="button">
          <svg width="18" height="18" viewBox="0 0 24 20" fill="none" stroke="rgb(101 98 105)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </header>
      <div className={styles.separator} />
      <main className={styles.contents}>
        <span>Choose who can see your project</span>
        <div className={styles.options_list}>
          <label className={styles.option}>
            <span className={styles.icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(101 98 105)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
            </span>
            <div className={styles.text_labels}>
              <span className={styles.label}>Everyone</span>
              <span className={styles.text}>Anyone can view this project</span>
            </div>
            <input type="radio" name="option" className={styles.input} />
          </label>
          <label className={styles.option}>
            <span className={styles.icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(101 98 105)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-check-icon lucide-user-round-check"><path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="m16 19 2 2 4-4"/></svg>
            </span>
            <div className={styles.text_labels}>
              <span className={styles.label}>Followers</span>
              <span className={styles.text}>Followers can view this project</span>
            </div>
            <input type="radio" name="option" className={styles.input} />
          </label>
          <label className={styles.option} htmlFor="input">
            <span className={styles.icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(101 98 105)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-plus-icon lucide-user-round-plus"><path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="M19 16v6"/><path d="M22 19h-6"/></svg>
            </span>
            <div className={styles.text_labels}>
              <span className={styles.label}>Specific People</span>
              <span className={styles.text}>Only select people can view this project</span>
              <select className={styles.dropdown}>
                <option>Select people</option>
                <option>Salasar</option>
                <option>Alyie</option>
                <option>Marquz</option>
              </select>
            </div>
            <input type="radio" name="option" className={styles.input} id="input" />
          </label>
        </div>
      </main>
      <div className={styles.separator} />
      <footer className={styles.footer}>
        <button className={`${styles.btn_cancel} ${styles.btn}`} type="button">Cancel</button>
        <button className={`${styles.btn_save} ${styles.btn}`} type="button">Save</button>
      </footer>
    </form>
  )
}