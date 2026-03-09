import styles from "./styles.module.css";

export const Alert = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>Data quality check</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="rgb(150 150 150)" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-skip-back-icon lucide-skip-back"><path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"/></svg>
      </div>
      <p className={styles.text}>
        Employer contributions increased on main workplace pension. Inconsistent platform data.
      </p>
      <div className={styles.footer}>
        <div className={styles.icon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(255 163 0)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert-icon lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
        </div>
        <div className={`${styles.chip} ${styles.alerts}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(91 91 91)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell-icon lucide-bell"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>
          <span>3</span>
          <span>alerts</span>
        </div>

        <div className={styles.chip}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(91 91 91)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark-icon lucide-bookmark"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/></svg>
          <span>DQC-12</span>
        </div>

        <span className={styles.chip}>1 min</span>
      </div>
      <div className={styles.tooltip}>3 alerts linked</div>
    </div>
  )
}