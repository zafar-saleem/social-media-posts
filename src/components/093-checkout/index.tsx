import styles from "./checkout.module.css";

export const Checkout = () => {
  return (
    <div className={styles.car_customization}>
      <span className={styles.car_title}>Build your R6</span>
      <p className={styles.car_desc}>Choose a suitable package and customize your R6</p>
      <div className={styles.models}>
        <label>
          <input type="radio" name="model" defaultChecked />
          <span className={styles.model_label}>1.0</span>
        </label>
        <label>
          <input type="radio" name="model" />
          <span className={styles.model_label}>2.0</span>
        </label>
        <label>
          <input type="radio" name="model" />
          <span className={styles.model_label}>3.0</span>
        </label>
        <label>
          <input type="radio" name="model" />
          <span className={styles.model_label}>4.0</span>
        </label>
      </div>
      <div className={`${styles.section} ${styles.package}`}>
        <span className={styles.section_title}>
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(188 188 188)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package-check-icon lucide-package-check"><path d="m16 16 2 2 4-4"/><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/><path d="m7.5 4.27 9 5.15"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/></svg>
          </span>
          <span>Package</span>
        </span>
        <label>
          <input type="radio" name="package" defaultChecked />
          <span className={styles.package_label}>
            <span>Rear-Wheel Drive</span>
            <p>Built for the road ahead</p>
          </span>
          <span>
            From $38,900
          </span>
        </label>
        <label>
          <input type="radio" name="package" />
          <span className={styles.package_label}>
            <span>Performance</span>
            <p>Adventure awaits you</p>
          </span>
          <span>
            From $47,400
          </span>
        </label>
      </div>
      
      <div className={`${styles.section} ${styles.battery}`}>
        <span className={styles.section_title}>
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(188 188 188)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-battery-full-icon lucide-battery-full"><path d="M10 10v4"/><path d="M14 10v4"/><path d="M22 14v-4"/><path d="M6 10v4"/><rect x="2" y="6" width="16" height="12" rx="2"/></svg>
          </span>
          <span>Battery</span>
        </span>
        <section>
        <label>
          <input type="radio" name="battery" defaultChecked />
          <span className={styles.battery_label}>
            <span>Standard</span>
            <p>321 mi</p>
            <span>
              + $9,500
            </span>
          </span>
          <span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="rgb(86 178 72)" stroke="rgb(86 178 72)" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap-icon lucide-zap">
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>
            </svg>
          </span>
        </label>
        <label className={styles.disabled}>
          <input type="radio" name="battery" disabled />
          <span className={styles.battery_label}>
            <span>Large</span>
            <p>Unavailable</p>
            <span>
              + $12,000
            </span>
          </span>
          <span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="rgb(188 188 188)" stroke="rgb(188 188 188)" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap-icon lucide-zap">
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>
            </svg>
          </span>
        </label>
        </section>
      </div>



      <div className={`${styles.section} ${styles.paint}`}>
        <span className={styles.section_title}>
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(188 188 188)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-paintbrush-icon lucide-paintbrush"><path d="m14.622 17.897-10.68-2.913"/><path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"/><path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"/></svg>
          </span>
          <span>Paint</span>
        </span>
        <section>
          <label>
            <input type="radio" name="paint" className={`${styles.btn_grey} ${styles.btn}`} defaultChecked />
            <span className={`${styles.color} ${styles.grey}`}></span>
            <span className={styles.label}>Grey</span>
          </label>
          <label>
            <input type="radio" name="paint" className={`${styles.btn_silver} ${styles.btn}`} />
            <span className={`${styles.color} ${styles.silver}`}></span>
            <span className={styles.label}>Silver</span>
          </label>
          <label>
            <input type="radio" name="paint" className={`${styles.btn_pearl} ${styles.btn}`} />
            <span className={`${styles.color} ${styles.pearl}`}></span>
            <span className={styles.label}>Pearl</span>
          </label>
        </section>
      </div>
      
      <button className={`button_two ${styles.btn_next}`}>
        <div>
          <span>Next</span>
        </div>
        <div>
          <span>Next</span>
        </div>
      </button>
    </div>
  )
}