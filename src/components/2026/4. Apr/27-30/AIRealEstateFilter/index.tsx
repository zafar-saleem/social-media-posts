import styles from "./styles.module.css";

export const AIRealEstateFilter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.group}>
          <label className={`${styles.button} ${styles.button_rent}`}>
            <input type="radio" name="property" defaultChecked />
            <span className={styles.label}>Rent</span>
          </label>
          <label className={`${styles.button} ${styles.button_rent}`}>
            <input type="radio" name="property" />
            <span className={styles.label}>Buy</span>
          </label>
        </div>



        <div className={styles.group}>
          <select>
            <option>Location</option>
            <option>South Hall</option>
            <option>North Hall</option>
            <option>East Hall</option>
            <option>West Hall</option>
          </select>
          <div className={styles.divider} />
          <select>
            <option>Bedrooms</option>
            <option>1 Bedroom</option>
            <option>2 Bedrooms</option>
            <option>3 Bedrooms</option>
            <option>4 Bedrooms</option>
          </select>
          <div className={styles.divider} />
          <select>
            <option>Price</option>
            <option>$500</option>
            <option>$600</option>
            <option>$700</option>
            <option>$800</option>
          </select>
          <label className={styles.close_button}>
            <input type="checkbox" />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(62 62 62)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </label>
        </div>



        
      </div>
      <textarea className={styles.textarea} placeholder="Describe the type of property..."></textarea>

      <div className={styles.actions}>
        <div className={styles.box}>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(63 63 63)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          </button>
          <select>
            <option>4.1o</option>
            <option>4.0o</option>
            <option>3.9o</option>
          </select>
        </div>

        <div className={styles.box}>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(63 63 63)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mic-icon lucide-mic"><path d="M12 19v3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><rect x="9" y="2" width="6" height="13" rx="3"/></svg>
          </button>
          <button className={styles.send_button}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(253 253 253)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-icon lucide-arrow-up"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
          </button>
        </div>
      </div>
    </div>
  )
}
