import styles from "./integration.module.css";

export const IntegrationModal = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <svg x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
          <path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z">
            </path>
            <path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"></path>
            <path fill="#66bb6a" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"></path>
            <path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"></path>
            <circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
        </svg>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(182 183 189)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-left-icon lucide-arrow-right-left"><path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/></svg>
        <svg x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
          <path fill="#f4511e" d="M29,24.009c0.001,1.442-0.259,2.873-0.768,4.223C26.882,28.74,25.451,29,24.008,29h-0.017	c-1.486-0.002-2.909-0.273-4.222-0.769C19.26,26.882,19,25.451,19,24.009v-0.017c-0.001-1.442,0.259-2.872,0.767-4.222	c1.35-0.509,2.781-0.77,4.224-0.769h0.017c1.443-0.001,2.874,0.26,4.224,0.769c0.509,1.349,0.769,2.78,0.768,4.222L29,24.009	L29,24.009z M43.722,20.667H32.048l8.255-8.255c-0.648-0.91-1.371-1.765-2.161-2.555V9.856c-0.79-0.789-1.644-1.511-2.554-2.159	l-8.255,8.255V4.278C26.235,4.094,25.123,4.001,24.01,4h-0.021c-1.132,0.001-2.242,0.097-3.323,0.278v11.674l-8.255-8.255	c-0.91,0.647-1.764,1.37-2.553,2.16L9.855,9.861c-0.789,0.789-1.51,1.642-2.158,2.551l8.256,8.255H4.278	c0,0-0.278,2.193-0.278,3.326v0.014c0,1.134,0.096,2.245,0.278,3.326h11.674l-8.256,8.255c1.299,1.822,2.892,3.416,4.715,4.715	l8.255-8.256v11.675c1.097,0.184,2.207,0.277,3.319,0.278h0.028c1.112-0.001,2.222-0.094,3.319-0.278V32.047l8.256,8.256	c0.909-0.648,1.763-1.37,2.553-2.159l0.002-0.002c0.789-0.79,1.511-1.644,2.159-2.553l-8.256-8.255h11.676	c0.182-1.08,0.277-2.188,0.278-3.319v-0.029C43.999,22.854,43.904,21.746,43.722,20.667L43.722,20.667z"></path> 
        </svg>
      </div>
      <h2 className={styles.title}>Connect Figma to Zapier</h2>
      <p className={styles.desc}>Unlock powerful desgin automation, streamline, handoffs, and automate repetitive tasks</p>
      <div className={styles.copy_section}>
        <input type="text" defaultValue={`https://example.com/321wq2`} />
        <button className={`button_one ${styles.button_copy}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(171 173 176)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy-icon lucide-copy">
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
          </svg>
          <span className={styles.button_label}>Copy</span>
        </button>
      </div>
      <div className={styles.features}>
        <span className={styles.section_label}>Zapier would like to:</span>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <span className={styles.icon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(240 253 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            </span>
            <span className={styles.text}>Trigger Workflows when a new figma file is created</span>
          </li>
          <li className={styles.list_item}>
            <span className={styles.icon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(240 253 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            </span>
            <span className={styles.text}>Sync figma comments to Slack</span>
          </li>
          <li className={styles.list_item}>
            <span className={styles.icon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(240 253 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            </span>
            <span className={styles.text}>Log design feedback activity to Notion</span>
          </li>
          <li className={styles.list_item}>
            <span className={styles.icon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(240 253 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            </span>
            <span className={styles.text}>Archive files or move them to specific projects</span>
          </li>
          <li className={styles.list_item}>
            <span className={styles.icon}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(240 253 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            </span>
            <span className={styles.text}>Integrate Figma with thousands of other Apps</span>
          </li>
        </ul>
      </div>
      <div className={styles.controls}>
        <button className={`button_one ${styles.button_demo}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(153 157 166)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play-icon lucide-play">
            <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/>
          </svg>
          <span className={styles.button_label}>How it works?</span>
        </button>
        <div className={styles.buttons}>
          <button className={`button_one ${styles.button_cancel}`}>
            <span>Cancel</span>
          </button>
          <button className={`button_one ${styles.button_allow}`}>
            <span>Allow</span>
          </button>
        </div>
      </div>
    </div>
  )
}