import styles from "./styles.module.css";

export const Modal = () => {
  return (
    <>
      <div className={styles.modal}>
        <h3 className={styles.title}>Confirm booking</h3>

        <div className={`${styles.block} ${styles.flex} ${styles.flex_column}`}>
          <span className={styles.heading}>1:1 Coaching session</span>
          <div className={styles.box}>
            <div className={styles.group}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(141 141 141)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-video-icon lucide-video"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>
              <span className={styles.text}>Online session</span>
            </div>
            <div className={styles.group}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(141 141 141)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock8-icon lucide-clock-8"><path d="M12 6v6l-4 2"/><circle cx="12" cy="12" r="10"/></svg>
              <span className={styles.text}>60 min</span>
            </div>
          </div>
        </div>







        <div className={`${styles.block} ${styles.flex} ${styles.flex_column}`}>
          <div className={`${styles.row}`}>
            <div className={styles.column}>
              <div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(141 141 141)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                <span className={styles.text}>Date</span>
              </div>
              <div>
                <span>Fri, Nov 28</span>
              </div>
            </div>
          </div>
          
          
          
          
          <div className={`${styles.row}`}>
            <div className={styles.column}>
              <div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(141 141 141)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock8-icon lucide-clock-8"><path d="M12 6v6l-4 2"/><circle cx="12" cy="12" r="10"/></svg>
                <span className={styles.text}>Time</span>
              </div>
              <div>
                <span>09:00 - 10:00</span>
              </div>
            </div>
          </div>
          
          
          
          
          <div className={`${styles.row}`}>
            <div className={styles.column}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(141 141 141)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
                <span className={styles.text}>With</span>
              </div>
              <div>
                <span>Sarah Jenkins</span>
              </div>
            </div>
          </div>
          
          
          
          
          
          <div className={`${styles.row}`}>
            <div className={styles.column}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(141 141 141)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-x-icon lucide-message-circle-x"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                <span className={styles.text}>Cancellation</span>
              </div>
              <div>
                <span className={styles.highlight}>Free before Dec 24, 09:00</span>
              </div>
            </div>
          </div>



          <div className={styles.row}>
            <div className={styles.payment}>
              <label>
                <input type="radio" name="payment" />
                <span>Pay on site</span>
              </label>
              <label>
                <input type="radio" name="payment" />
                <span>Use my plan</span>
              </label>
            </div>
          </div>



          <div className={styles.row}>
            <div className={styles.block}>
              <div className={styles.container}>
                <span className={styles.heading}>Starter</span>
                <span className={styles.text}>$49 / month</span>

                <div className={styles.bar_wrapper}>
                  <div>
                    <span>1 of 4 sessions used</span>
                    <span className={styles.text}>Renews on Dec 27</span>
                  </div>
                  <div className={styles.bar}>
                    <div className={styles.progress} /><div className={styles.background} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.footer}>
          <p className={styles.text}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(141 141 141)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check-icon lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
            Payments are secure and enrypted.
          </p>

          <button className={styles.btn_confirm}>Confirm</button>
        </div>
      </div>
      <div className={styles.backdrop} />
    </>
  )
}