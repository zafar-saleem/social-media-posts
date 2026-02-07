import styles from "./styles.module.css";

export const ProductShare = () => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Share Quizzo with your friends</h1>
      <p className={styles.text}>Join forces with your friends on Quizzo. Learn as a team and support each other.</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 24 24" fill="none" stroke="rgb(89 179 82)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gift-icon lucide-gift"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>
      <button className={styles.cta}>Invite Friends</button>
    </div>
  )
}