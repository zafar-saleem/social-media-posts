import styles from "./styles.module.css";
import { CARD_CONTENTS } from "./data";
import Link from "next/link";
import { CSSProperties } from "react";

export const MeetingsCard = () => {
  return (
    <div className={styles.card}>
      <h1 className={styles.card_title}>{CARD_CONTENTS.title}</h1>
      <div className={styles.group}>
        {
          CARD_CONTENTS.children.map(item => (
            <div className={styles.box} key={item.id}>
              <span className={styles.meeting_timestamp}>{item.date}</span>
              <span className={styles.meeting_title}>{item.meeting_title}</span>
              <p className={styles.text}>{item.text}</p>
              <div className={styles.block}>
                <div className={styles.meeting_attendees}>
                  {
                    item.attendees.map(childItem => (
                      <Link
                        href={childItem.link}
                        key={childItem.id}
                        style={{
                          "--color": childItem.color,
                        } as CSSProperties}
                      >
                        {childItem.avatar}
                      </Link>
                    ))
                  }
                </div>
                <div className={styles.actions}>
                  <button className={`${styles.button_join}`} disabled={item.done}>
                    <Icon status={item.done} />
                    <span className={styles.button_label}>Join meeting</span>
                  </button>
                  <button className={styles.button_cancel}>Cancel</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

const Icon = ({ status }) => {
  if (status) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(211 209 210)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-video-icon lucide-video"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>
  }

  return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(254 254 254)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-video-icon lucide-video"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>
}
