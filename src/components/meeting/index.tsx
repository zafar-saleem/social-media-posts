import Image from "next/image";
import styles from "./meeting.module.css";

const ICONS = {
  calendar: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYig4MCA4MCA4MikiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jYWxlbmRhci1jbG9jay1pY29uIGx1Y2lkZS1jYWxlbmRhci1jbG9jayI+PHBhdGggZD0iTTIxIDcuNVY2YTIgMiAwIDAgMC0yLTJINWEyIDIgMCAwIDAtMiAydjE0YTIgMiAwIDAgMCAyIDJoMy41Ii8+PHBhdGggZD0iTTE2IDJ2NCIvPjxwYXRoIGQ9Ik04IDJ2NCIvPjxwYXRoIGQ9Ik0zIDEwaDUiLz48cGF0aCBkPSJNMTcuNSAxNy41IDE2IDE2LjNWMTQiLz48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSI2Ii8+PC9zdmc+",
}

export const Meeting = () => {
  return (
    <div className={styles.meeting_container}>
      <header className={styles.meeting_header}>
        <div className={styles.meeting_info}>
          <span className={styles.meeting_title}>Marketing Standup</span>
          <div className={`${styles.meta} ${styles.meeting_time}`}>
            <span className={styles.meeting_icon}>
              <Image
                src={ICONS.calendar}
                width={15}
                height={15}
                alt=""
              />
            </span>
            <span>09:00 - 10:00</span>
          </div>
        </div>
        <div className={styles.meeting_meta_info}>
          <span className={styles.meeting_joiners}>
            <span />
            <span />
            <span />
            <span />
            <span />
          </span>
          <span className={`${styles.meta} ${styles.meeting_date}`}>Tuesday, June 10</span>
        </div>
      </header>
      <main className={styles.meeting_content}>
        <div className={styles.meeting_meta}>
          <span className={styles.meeting_availability_count}>
            <span />
            <span>Available (6)</span>
          </span>
          <span className={styles.meeting_users_count}>Other users (14)</span>
        </div>
        <ul>
          <li className={styles.meeting_user_item}>
            <span className={styles.meeting_avatar} />
            <span className={styles.meeting_user_info}>
              <span className={styles.meeting_username}>Lucas Carter</span>
              <span className={styles.meeting_user_email}>lucas@email.com</span>
            </span>
            <span className={styles.meeting_actions}>
              <button>Add</button>
            </span>
          </li>


          <li className={styles.meeting_user_item}>
            <span className={styles.meeting_avatar} />
            <span className={styles.meeting_user_info}>
              <span className={styles.meeting_username}>Zafar Saleem</span>
              <span className={styles.meeting_user_email}>zafar@email.com</span>
            </span>
            <span className={styles.meeting_actions}>
              <button>Add</button>
            </span>
          </li>


          <li className={styles.meeting_user_item}>
            <span className={styles.meeting_avatar} />
            <span className={styles.meeting_user_info}>
              <span className={styles.meeting_username}>Miles Hansely</span>
              <span className={styles.meeting_user_email}>miles@email.com</span>
            </span>
            <span className={styles.meeting_actions}>
              <button>Add</button>
            </span>
          </li>


          <li className={styles.meeting_user_item}>
            <span className={styles.meeting_avatar} />
            <span className={styles.meeting_user_info}>
              <span className={styles.meeting_username}>Dan Robert</span>
              <span className={styles.meeting_user_email}>dan@email.com</span>
            </span>
            <span className={styles.meeting_actions}>
              <button>Add</button>
            </span>
          </li>

          <li className={styles.meeting_user_item}>
            <span className={styles.meeting_avatar} />
            <span className={styles.meeting_user_info}>
              <span className={styles.meeting_username}>Miles Hansely</span>
              <span className={styles.meeting_user_email}>miles@email.com</span>
            </span>
            <span className={styles.meeting_actions}>
              <button>Add</button>
            </span>
          </li>
        </ul>
      </main>

      <footer className={styles.meeting_footer}>
        <button>Join team call</button>
      </footer>
    </div>
  )
}