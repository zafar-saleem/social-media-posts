import Image from "next/image";
import styles from "./feature.module.css";
import power from "./assets/power.png";
import intergration from "./assets/integrations.png";

export const FeatureSection = () => {
  return (
    <div className={styles.feature}>
      <div className={`${styles.item}`}>
        <Image
          src={power}
          width={250}
          height={220}
          alt=""
        />
        <span className={styles.title_text}>Powerful analytic tools</span>
        <p className={styles.desc}>Track performance metrics with real-time data visualization and customizable reports for informed.</p>
      </div>
      <div className={`${styles.item}`}>
        <Image
          src={intergration}
          width={250}
          height={180}
          alt=""
        />
        <span className={styles.title_text}>Powerful analytic tools</span>
        <p className={styles.desc}>Track performance metrics with real-time data visualization and customizable reports for informed.</p>
      </div>
      <div className={`${styles.item}`}>
        <section className={styles.title}>
          <span className={styles.icon}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgb(13 13 13)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap-icon lucide-zap">
              <path className={styles.flash} d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>
            </svg>
          </span>
          <span className={styles.title_text}>Faaast</span>
        </section>
        <p className={styles.desc}>It supports an entire helping developers and innovate</p>
      </div>
      <div className={`${styles.item}`}>
        <section className={styles.title}>
          <span className={styles.icon}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgb(13 13 13)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-switch-camera-icon lucide-switch-camera">
              <path d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"/>
              <path d="M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" className={styles.right_rect}/>
              <circle cx="12" cy="12" r="3"/>
              <path d="m18 22-3-3 3-3" className={styles.arrow_left}/>
              <path d="m6 2 3 3-3 3" className={styles.arrow_right}/>
            </svg>
          </span>
          <span className={styles.title_text}>Powerful</span>
        </section>
        <p className={styles.desc}>It supports an entire helping developers and businesses</p>
      </div>
      <div className={`${styles.item}`}>
        <section className={styles.title}>
          <span className={styles.icon}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgb(13 13 13)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-icon lucide-lock">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4" className={styles.lock_top} />
            </svg>
          </span>
          <span className={styles.title_text}>Security</span>
        </section>
        <p className={styles.desc}>An helping developers business innovate</p>
      </div>
      <div className={`${styles.item}`}>
        <section className={styles.title}>
          <span className={styles.icon}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgb(13 13 13)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles-icon lucide-sparkles">
              <path className={styles.star} d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
              <path d="M20 3v4" className={styles.top_star}/>
              <path d="M22 5h-4" className={styles.top_star}/>
              <path d="M4 17v2" className={styles.bottom_star}/>
              <path d="M5 18H3" className={styles.bottom_star}/>
            </svg>
          </span>
          <span className={styles.title_text}>AI Powered</span>
        </section>
        <p className={styles.desc}>Helping developers businesses innovate</p>
      </div>
    </div>
  )
}