import styles from "./styles.module.css";

export const Settings = () => {
  return (
    <ul className={styles.settings}>
      <li className={styles.item}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(149 115 238)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon-icon lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>
        <div>
          <span className={styles.label}>Dark mode</span>
          <p className={styles.desc}>Makes the app dark mode. Easier on your eyes and battery.</p>
        </div>
        <input type="checkbox" className={styles.toggle_input} />
      </li>
      <li className={styles.item}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(149 115 238)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud-upload-icon lucide-cloud-upload"><path d="M12 13v8"/><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m8 17 4-4 4 4"/></svg>
        <div>
          <span className={styles.label}>Auto Backup</span>
          <p className={styles.desc}>Saves your data to the cloud automatically.</p>
        </div>
        <input type="checkbox" className={styles.toggle_input} />
      </li>
      <li className={styles.item}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(67 153 130)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell-icon lucide-bell"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>
        <div>
          <span className={styles.label}>Notifications</span>
          <p className={styles.desc}>Sends alerts about updates and reminders.</p>
        </div>
        <input type="checkbox" className={styles.toggle_input} />
      </li>
      <li className={styles.item}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(185 26 88)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-keyhole-icon lucide-lock-keyhole"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>
        <div>
          <span className={styles.label}>Privacy Lock</span>
          <p className={styles.desc}>Protects actions with a code or biometrics.</p>
        </div>
        <input type="checkbox" className={styles.toggle_input} />
      </li>
      <li className={styles.item}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(196 101 69)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wifi-icon lucide-wifi"><path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/></svg>
        <div>
          <span className={styles.label}>Wi-Fi Assist</span>
          <p className={styles.desc}>Stays online by switching to a better network.</p>
        </div>
        <input type="checkbox" className={styles.toggle_input} />
      </li>
      <li className={styles.item}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(125 125 125)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-languages-icon lucide-languages"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>
        <div>
          <span className={styles.label}>Multilingual</span>
          <p className={styles.desc}>Use the app in your language.</p>
        </div>
        <input type="checkbox" className={styles.toggle_input} />
      </li>
    </ul>
  )
}
