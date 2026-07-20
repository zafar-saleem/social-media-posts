import styles from "./styles.module.css";

export const DisabledButton = () => {
  return (
    <button className={styles.button} disabled>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(73 73 73)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-icon lucide-arrow-up"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
    </button>
  )
}