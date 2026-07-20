import styles from "./styles.module.css";

export const SwapBits = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>Swap</span>
        <button className={`${styles.button} ${styles.filter}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(161 161 161)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sliders-horizontal-icon lucide-sliders-horizontal"><path d="M10 5H3"/><path d="M12 19H3"/><path d="M14 3v4"/><path d="M16 17v4"/><path d="M21 12h-9"/><path d="M21 19h-5"/><path d="M21 5h-7"/><path d="M8 10v4"/><path d="M8 12H3"/></svg>
        </button>
      </div>



      <div className={styles.contents}>
        <div className={styles.box}>
          <div>
            <span>From</span>
            <select>
              <option>CLOUSE</option>
            </select>
          </div>


          <section className={styles.transfer_icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(252 253 253)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-down-icon lucide-arrow-up-down"><path d="m21 16-4 4-4-4"/><path d="M17 20V4"/><path d="m3 8 4-4 4 4"/><path d="M7 4v16"/></svg>
          </section>


          <div>
            <span className={`${styles.bold} ${styles.large}`}>2.7</span>
          </div>


          <div>
            <span className={`${styles.secondary} ${styles.small}`}>$1,498.80</span>
            <span className={`${styles.secondary} ${styles.small}`}>Balance: 70.49 <span className={styles.highlight}>Max</span></span>
          </div>




          
        </div>




        <div className={styles.box}>
          <div>
            <span>From</span>
            <select>
              <option>ETH</option>
            </select>
          </div>



          <div>
            <span className={`${styles.bold} ${styles.large}`}>0.5994</span>
          </div>


          <div>
            <span className={`${styles.secondary} ${styles.small}`}>$1,498.80</span>
            <span className={`${styles.secondary} ${styles.small}`}>Balance: 70.49 <span className={styles.highlight}>Max</span></span>
          </div>
        </div>
      </div>




      <div className={styles.footer}>
        <button className={`${styles.button} ${styles.button_confirm}`}>Confirm Swap</button>
      </div>
    </div>
  )
}