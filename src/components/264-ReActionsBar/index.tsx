import styles from "./styles.module.css";

export const ReActionsBar = () => {
  return (
    <div className={styles.container}>
      <label className={`${styles.btn} ${styles.btn_like}`}>
        <input type="checkbox" className={styles.action} />
        <div className={styles.tooltip}>
          <span className={`${styles.text_like} ${styles.text}`}>Like</span>
          <span className={`${styles.text_liked} ${styles.text}`}>Liked</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(251 252 254)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thumbs-up-icon lucide-thumbs-up"><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/><path d="M7 10v12"/></svg>
      </label>
      <label className={`${styles.btn} ${styles.btn_dislike}`}>
        <input type="checkbox" className={styles.action} />
        <div className={styles.tooltip}>
          <span className={`${styles.text_dislike} ${styles.text}`}>Dislike</span>
          <span className={`${styles.text_disliked} ${styles.text}`}>Disliked</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(251 252 254)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thumbs-down-icon lucide-thumbs-down"><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"/><path d="M17 14V2"/></svg>
      </label>
      <label className={`${styles.btn} ${styles.btn_edit}`}>
        <input type="checkbox" className={styles.action} />
        <div className={styles.tooltip}>
          <span className={`${styles.text_edit} ${styles.text}`}>Edit</span>
          <span className={`${styles.text_edited} ${styles.text}`}>Edited</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(251 252 254)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-icon lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
      </label>
      <label className={`${styles.btn} ${styles.btn_delete}`}>
        <input type="checkbox" className={styles.action} />
        <div className={styles.tooltip}>
          <span className={`${styles.text_delete} ${styles.text}`}>Delete</span>
          <span className={`${styles.text_deleted} ${styles.text}`}>Deleted</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(251 252 254)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
      </label>
    </div>
  )
}