import styles from "./styles.module.css";

// <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(74 74 74)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>

{/* <svg
  width="24" height="24" viewBox="0 0 24 24"
  fill="none" stroke="rgb(74 74 74)"
  stroke-width="2" stroke-linecap="round"
  stroke-linejoin="round" className="lucide lucide-brackets-icon lucide-brackets">
    <path d="M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3"/>
    <path d="M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3"/>
</svg> */}



export const ButtonClose = () => {
  return (
    <button className={styles.button}>
      <span className={styles.bracket}>[</span>
      <div>
        <div className={styles.icon}>
          <svg
              width="20" height="20" viewBox="0 0 24 24"
              fill="none" stroke="rgb(74 74 74)"
              stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" className="lucide lucide-x-icon lucide-x">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
          </svg>
        </div>
        <span className={styles.label}>Close</span>
      </div>
      <span className={styles.bracket}>]</span>
    </button>
  )
}