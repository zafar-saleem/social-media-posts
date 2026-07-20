import styles from "./styles.module.css";

export const ChatButton = () => {
  return (
    <button className={styles.button_chat}>
      <div>
        <div className={styles.lock_icon}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgb(251 251 251)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-icon lucide-lock">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
        </div>


        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(251 251 251)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className={`lucide lucide-smile-icon lucide-smile ${styles.smile_icon}`}>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" x2="9.01" y1="9" y2="9"/>
          <line x1="15" x2="15.01" y1="9" y2="9"/>
        </svg>


        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgb(251 251 251)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-icon lucide-message-circle">
          <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/>
        </svg>
      </div>
      <span className={styles.text}>Private Chat</span>
    </button>
  )
}