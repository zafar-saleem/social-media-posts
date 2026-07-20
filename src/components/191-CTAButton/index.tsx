import styles from "./styles.module.css";

export const GetInTouchButton = () => {
  return (
    <button className={styles.button}>
      <div className={styles.wrapper}>
        <span className={styles.button_icon}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
        </span>
        <span className={styles.button_label}>Get In Touch</span>
      </div>
    </button>
  )
}