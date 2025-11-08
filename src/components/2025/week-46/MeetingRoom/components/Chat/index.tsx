import styles from "../../styles.module.css";

export const Chat = () => {
  return (
    <section className={styles.chat_box}>
      <div className={styles.chat_text}>
        <p className={`${styles.chat_texts} ${styles.start}`}>
          Check Jira docs guys.
        </p>
        <p className={`${styles.chat_texts} ${styles.end}`}>
          Working on it.
        </p>
      </div>
      <div className={styles.chat_container}>
        <textarea rows={2} cols={20} className={styles.chat_input}></textarea>
        <button>Send</button>
      </div>
    </section>
  )
}
