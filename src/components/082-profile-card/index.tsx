import Image from "next/image";
import styles from "./profile.module.css";

export const ProfileCard = () => {
  return (
    <div className={styles.profile_card}>
      <div className={styles.profile_container}>
        <span className={styles.profile_photo}>
          <span className={styles.photo}>
            <Image
              src="https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg"
              width={50}
              height={50}
              alt=""
            />
          </span>
          <span className={styles.exp_level}>PRO</span>
        </span>
        <span className={styles.status_badge}>
          <span>Available</span>
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYig4OSAxNjIgMTIyKSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tcmlnaHQtaWNvbiBsdWNpZGUtY2hldnJvbi1yaWdodCI+PHBhdGggZD0ibTkgMTggNi02LTYtNiIvPjwvc3ZnPg=="
            width={15}
            height={15}
            alt=""
          />
        </span>
      </div>
      <div className={styles.profile_personal_info}>
        <span className={styles.profile_title}>Amy</span>
        <span className={styles.profile_desc}>Independent Designer</span>
      </div>
      <div className={styles.profile_states_action}>
        <div>
          <button className={styles.button}>
            <span className={styles.button_icon_container}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="rgb(255 255 255)" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap-icon lucide-zap">
                <path className={styles.flash} d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>
              </svg>
            </span>
            <span className={styles.button_label}>
              <span>Get</span> <span>in</span> <span>touch</span>
            </span>
          </button>
        </div>
        <span className={styles.icon_state}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgb(85 84 89)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-no-axes-column-icon lucide-chart-no-axes-column">
            <line x1="18" x2="18" y1="20" y2="10" className={`${styles.line} ${styles.line_right}`}/>
            <line x1="12" x2="12" y1="20" y2="4" className={`${styles.line} ${styles.line_middle}`}/>
            <line x1="6" x2="6" y1="20" y2="14" className={`${styles.line} ${styles.line_left}`}/>
          </svg>
        </span>
        <button className={styles.icon_share}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgb(85 84 89)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share-icon lucide-share">
            <path d="M12 2v13" className={styles.arrow}/>
            <path d="m16 6-4-4-4 4" className={styles.arrow}/>
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
          </svg>
        </button>
      </div>
      <div className={styles.profile_meta}>
        <section>
          <span className={styles.value}>$10K+</span>
          <span className={styles.label}>Earned</span>
        </section>
        <section>
          <span className={styles.value}>4x</span>
          <span className={styles.label}>Hired</span>
        </section>
        <section>
          <span className={styles.value}>
            <span className={styles.icon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="rgb(0 0 0)" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
            </span>
            <span className={styles.text}>4.92</span>
          </span>
          <span className={styles.label}>Rating</span>
        </section>
        <section>
          <span className={styles.value}>71</span>
          <span className={styles.label}>Followers</span>
        </section>
      </div>
      <button className={styles.platform_states}>
        <span>
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wYXJ0eS1wb3BwZXItaWNvbiBsdWNpZGUtcGFydHktcG9wcGVyIj48cGF0aCBkPSJNNS44IDExLjMgMiAyMmwxMC43LTMuNzkiLz48cGF0aCBkPSJNNCAzaC4wMSIvPjxwYXRoIGQ9Ik0yMiA4aC4wMSIvPjxwYXRoIGQ9Ik0xNSAyaC4wMSIvPjxwYXRoIGQ9Ik0yMiAyMGguMDEiLz48cGF0aCBkPSJtMjIgMi0yLjI0Ljc1YTIuOSAyLjkgMCAwIDAtMS45NiAzLjEyYy4xLjg2LS41NyAxLjYzLTEuNDUgMS42M2gtLjM4Yy0uODYgMC0xLjYuNi0xLjc2IDEuNDRMMTQgMTAiLz48cGF0aCBkPSJtMjIgMTMtLjgyLS4zM2MtLjg2LS4zNC0xLjgyLjItMS45OCAxLjExYy0uMTEuNy0uNzIgMS4yMi0xLjQzIDEuMjJIMTciLz48cGF0aCBkPSJtMTEgMiAuMzMuODJjLjM0Ljg2LS4yIDEuODItMS4xMSAxLjk4QzkuNTIgNC45IDkgNS41MiA5IDYuMjNWNyIvPjxwYXRoIGQ9Ik0xMSAxM2MxLjkzIDEuOTMgMi44MyA0LjE3IDIgNS0uODMuODMtMy4wNy0uMDctNS0yLTEuOTMtMS45My0yLjgzLTQuMTctMi01IC44My0uODMgMy4wNy4wNyA1IDJaIi8+PC9zdmc+"
            width={36}
            height={36}
            alt=""
          />
        </span>
        <span>Top</span> <span>Independent</span>
      </button>
    </div>
  )
}
