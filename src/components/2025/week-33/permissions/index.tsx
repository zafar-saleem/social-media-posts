import styles from "./permissions.module.css";

// 
// REVOKE: 
// EMAIL: 
// BIO: 

export const Permissions = () => {
  return (
    <ul className={styles.permissions_container}>
      <li className={styles.item}>
        <article className={styles.content}>
          <span className={styles.header}>
            <span className={styles.icon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="url(#grad2)" stroke="rgb(214 66 180)" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell-icon lucide-bell">
                <defs>
                  <linearGradient id="grad2" x1="0%" x2="150%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="rgb(214 66 180)" />
                    <stop offset="100%" stopColor="rgb(0 0 0)" />
                  </linearGradient>
                </defs>
                <path d="M10.268 21a2 2 0 0 0 3.464 0"/>
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>
              </svg>
            </span>
            <span className={styles.title}>On-chain alerts</span>
          </span>
          <p className={styles.text}>
            Get notified when wallets you follow make large transactions
          </p>
        </article>
        <div className={styles.action}>
          <input type="checkbox" className={styles.toggle} />
        </div>
      </li>
      <li className={styles.item}>
        <article className={styles.content}>
          <span className={styles.header}>
            <span className={styles.icon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="url(#grad3)" stroke="rgb(77 147 240)" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notepad-text-icon lucide-notepad-text">
                <defs>
                  <linearGradient id="grad3" x1="0%" x2="150%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="rgb(77 147 240)" />
                    <stop offset="100%" stopColor="rgb(0 0 0)" />
                  </linearGradient>
                </defs>
                <path d="M8 2v4"/>
                <path d="M12 2v4"/>
                <path d="M16 2v4"/>
                <rect width="16" height="18" x="4" y="4" rx="2"/>
                <path d="M8 10h6"/>
                <path d="M8 14h8"/>
                <path d="M8 18h5"/>
              </svg>
            </span>
            <span className={styles.title}>Revoke access reminders</span>
          </span>
          <p className={styles.text}>
            Get monthly reminders to revoke inactive smart contract permissions
          </p>
        </article>
        <div className={styles.action}>
          <input type="checkbox" className={styles.toggle} />
        </div>
      </li>
      <li className={styles.item}>
        <article className={styles.content}>
          <span className={styles.header}>
            <span className={styles.icon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="url(#grad4)" stroke="rgb(101 247 186)" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail">
                <defs>
                  <linearGradient id="grad4" x1="0%" x2="150%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="rgb(101 247 186)" />
                    <stop offset="100%" stopColor="rgb(0 0 0)" />
                  </linearGradient>
                </defs>
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" stroke="rgb(0 0 0)" className={styles.path}/>
                <rect x="2" y="4" width="20" height="16" rx="2"/>
              </svg>
            </span>
            <span className={styles.title}>Transaction summaries</span>
          </span>
          <p className={styles.text}>
            Receive a daily email with your wallet activity and gas spent
          </p>
        </article>
        <div className={styles.action}>
          <input type="checkbox" className={styles.toggle} />
        </div>
      </li>
      <li className={styles.item}>
        <article className={styles.content}>
          <span className={styles.header}>
            <span className={styles.icon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="url(#grad5)" stroke="rgb(227 172 69)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-fingerprint-icon lucide-fingerprint">
                <defs>
                  <linearGradient id="grad5" x1="0%" x2="150%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="rgb(227 172 69)" />
                    <stop offset="100%" stopColor="rgb(0 0 0)" />
                  </linearGradient>
                </defs>
                <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/>
                <path d="M14 13.12c0 2.38 0 6.38-1 8.88"/>
                <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/>
                <path d="M2 12a10 10 0 0 1 18-6"/>
                <path d="M2 16h.01"/>
                <path d="M21.8 16c.2-2 .131-5.354 0-6"/>
                <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/>
                <path d="M8.65 22c.21-.66.45-1.32.57-2"/>
                <path d="M9 6.8a6 6 0 0 1 9 5.2v2"/>
              </svg>
            </span>
            <span className={styles.title}>Biometric security</span>
          </span>
          <p className={styles.text}>
            Unlock your wallet with Face ID or fingerprint
          </p>
        </article>
        <div className={styles.action}>
          <input type="checkbox" className={styles.toggle} />
        </div>
      </li>
    </ul>
  )
}