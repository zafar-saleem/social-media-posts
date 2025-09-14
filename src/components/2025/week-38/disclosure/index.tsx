import styles from "./disclosure.module.css";

export const Disclosure = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(182 182 191)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-snow-icon lucide-sun-snow"><path d="M10 21v-1"/><path d="M10 4V3"/><path d="M10 9a3 3 0 0 0 0 6"/><path d="m14 20 1.25-2.5L18 18"/><path d="m14 4 1.25 2.5L18 6"/><path d="m17 21-3-6 1.5-3H22"/><path d="m17 3-3 6 1.5 3"/><path d="M2 12h1"/><path d="m20 10-1.5 2 1.5 2"/><path d="m3.64 18.36.7-.7"/><path d="m4.34 6.34-.7-.7"/></svg>
        <span className={styles.title}>Predictive Completion</span>
        <label className={styles.btn_switch}>
          <input type="checkbox" className={styles.switch_input} />
        </label>
      </header>
      <main className={styles.contents}>
        <label>
          <input type="checkbox" />
          <span>Enable Inline Suggestion</span>
        </label>
      </main>
    </div>
  )
}