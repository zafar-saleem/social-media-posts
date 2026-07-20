import styles from "./styles.module.css";

export const Pricing = () => {
  return (
    <div className={styles.container}>
      <div>
        <span>Pricing</span>
        <h1>Flexible pricing for every stage</h1>
        <div className={styles.tabs}>
          <label>
            <input type="radio" name="tab" defaultChecked className={styles.tab_monthly} />
            <span>Monthly</span>
          </label>
          <label>
            <input type="radio" name="tab" className={styles.tab_yearly} />
            <span>Yearly</span>
          </label>
        </div>
      </div>
      <div className={styles.pricing_monthly}>
        <div>
          <span>Starter</span>
          <p>Best for early stage brands and campaigns</p>
          <div>
            <span>$3999</span>
            <span>$3199</span>
          </div>
        </div>
        <ul>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="rgb(212 208 207)" stroke="rgb(255 255 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span>Content strategy for 1 platform</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="rgb(212 208 207)" stroke="rgb(255 255 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span>6-12 contents / months</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="rgb(212 208 207)" stroke="rgb(255 255 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span>Copywriting + visual direction</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="rgb(212 208 207)" stroke="rgb(255 255 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span>Basic performance insights</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="rgb(212 208 207)" stroke="rgb(255 255 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span>1 revision round</span>
          </li>
        </ul>
        <button>Get Starter Plan</button>
      </div>
      <div className={styles.pricing_yearly}>
        <div>
          <span>Agency</span>
          <p>Best for early stage brands and campaigns</p>
          <div>
            <span>$5999</span>
            <span>$4799</span>
          </div>
        </div>
        <ul>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="rgb(177 159 253)" stroke="rgb(0 0 0)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span>Content strategy for 1 platform</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="rgb(177 159 253)" stroke="rgb(0 0 0)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span>6-12 contents / months</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="rgb(177 159 253)" stroke="rgb(0 0 0)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span>Copywriting + visual direction</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="rgb(177 159 253)" stroke="rgb(0 0 0)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span>Basic performance insights</span>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="rgb(177 159 253)" stroke="rgb(0 0 0)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span>1 revision round</span>
          </li>
        </ul>
        <button>Get Agency Plan</button>
      </div>
    </div>
  )
}