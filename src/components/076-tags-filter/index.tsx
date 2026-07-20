import Image from "next/image";
import styles from "./tags.module.css";

const ARROW = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxMzUgMTM1IDEzNSkiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXVwLWljb24gbHVjaWRlLWNoZXZyb24tdXAiPjxwYXRoIGQ9Im0xOCAxNS02LTYtNiA2Ii8+PC9zdmc+";
// const TAG = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(135 135 135)" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tag-icon lucide-tag"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>;

export const TagsFilter = () => {
  return (
    <div className={styles.tags_container}>
      <button popoverTarget="tags" className={styles.filter}>
        <span className={styles.filter_icon}>
          <svg 
            width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="rgb(135 135 135)"
            strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" 
            className="lucide lucide-tag-icon lucide-tag">
              <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/>
              <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>
          </svg>
        </span>
        <span className={styles.filter_label}>Tags</span>
        <span className={styles.filter_icon_state}>
          <Image
            src={ARROW}
            width={20}
            height={20}
            alt=""
            className={styles.icon_state}
          />
        </span>
      </button>
      <ul 
        popover="auto"
        id="tags"
        className={styles.tags_list}
      >
        <li className={styles.tag_container}>
          <label className={styles.tag_label}>
            <input type="checkbox" className={styles.tag_toggle} />
            <span className={styles.tag_label_text}>Hot Lead</span>
          </label>
        </li>
        <li className={styles.tag_container}>
          <label className={styles.tag_label}>
            <input type="checkbox" className={styles.tag_toggle} />
            <span className={styles.tag_label_text}>High Priority</span>
          </label>
        </li>
        <li className={styles.tag_container}>
          <label className={styles.tag_label}>
            <input type="checkbox" className={styles.tag_toggle} />
            <span className={styles.tag_label_text}>Call Scheduled</span>
          </label>
        </li>
        <li className={styles.tag_container}>
          <label className={styles.tag_label}>
            <input type="checkbox" className={styles.tag_toggle} />
            <span className={styles.tag_label_text}>Needs Revision</span>
          </label>
        </li>
      </ul>
    </div>
  )
}