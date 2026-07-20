import styles from "./styles.module.css";

export const Pricing = () => {
  return (
    <section className={styles.container}>
      <section className={styles.price_section}>
        <span className={styles.title}>Landing Page</span>
        <p className={styles.desc}>
          Get a high quality landing page for your product
        </p>
        <div>
          <span className={styles.currency}>$</span> <span className={styles.amount}>1999</span><span className={styles.occurence}>/fixed</span>
        </div>
        <button>
          <span>Book a call</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(96 96 108)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
        </button>
      </section>

      <section className={styles.features}>
        <ul className="">
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(4 4 4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span className={styles.text}>2 designs concept</span>
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(4 4 4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span className={styles.text}>Custom code</span>
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(4 4 4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span className={styles.text}>On-time delivery</span>
          </li>
        </ul>
        <ul className="">
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(4 4 4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span className={styles.text}>Support</span>
          </li>
          <li>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(4 4 4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            <span className={styles.text}>Animations</span>
          </li>
        </ul>
      </section>


      <label className={styles.toggle}>
        <input type="checkbox" />
        <span className={styles.label}>Fast delivery (5 days)</span>
      </label>
    </section>
  )
}
