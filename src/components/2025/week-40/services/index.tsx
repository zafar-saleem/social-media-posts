import Image from "next/image";
import styles from "./services.module.css";

export const Services = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          <li className={styles.list_item}>
            <label>
              <input type="radio" name="link" className={styles.marketing} defaultChecked />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(143 143 143)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open-check-icon lucide-book-open-check"><path d="M12 21V7"/><path d="m16 12 2 2 4-4"/><path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"/></svg>
              <span>Marketing Strategy</span>
            </label>
          </li>
          <li className={styles.list_item}>
            <label>
              <input type="radio" name="link" className={styles.product} />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(143 143 143)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rocket-icon lucide-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
              <span>Product Launch</span>
            </label>
          </li>
          <li className={styles.list_item}>
            <label>
              <input type="radio" name="link" className={styles.sales} />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(143 143 143)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-weight-icon lucide-weight"><circle cx="12" cy="5" r="3"/><path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"/></svg>
              <span>Sales Strategy</span>
            </label>
          </li>
          <li className={styles.list_item}>
            <label>
              <input type="radio" name="link" className={styles.customer} />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(143 143 143)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-plus-icon lucide-heart-plus"><path d="m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49"/><path d="M15 15h6"/><path d="M18 12v6"/></svg>
              <span>Customer Support</span>
            </label>
          </li>
          <li className={styles.list_item}>
            <label>
              <input type="radio" name="link" className={styles.engineering} />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(143 143 143)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles-icon lucide-sparkles"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/></svg>
              <span>AI Engineering</span>
            </label>
          </li>
          <li className={styles.list_item}>
            <label>
              <input type="radio" name="link" className={styles.management} />
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(143 143 143)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-kanban-icon lucide-square-kanban"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 7v7"/><path d="M12 7v4"/><path d="M16 7v9"/></svg>
              <span>Product Management</span>
            </label>
          </li>
        </ul>
      </nav>

      <div className={`${styles.contents} ${styles.marketing_contents}`}>
        <Image
          src="https://cdn.dribbble.com/userupload/45069645/file/6bac311d07bedf616f466fdcfcbde2e8.jpg"
          width={100}
          height={100}
          alt=""
        />
      </div>
      <div className={`${styles.contents} ${styles.product_contents}`}>
        <Image
          src="https://cdn.dribbble.com/userupload/45101387/file/5b03fc84f71541315dab21926e2a47ca.png"
          width={100}
          height={100}
          alt=""
        />
      </div>
      <div className={`${styles.contents} ${styles.sales_contents}`}>
        <Image
          src="https://cdn.dribbble.com/userupload/45101651/file/52f361a32696fa0dc229e1ed975ab855.png"
          width={100}
          height={100}
          alt=""
        />
      </div>
      <div className={`${styles.contents} ${styles.customer_contents}`}>
        <Image
          src="https://cdn.dribbble.com/userupload/44989787/file/0e674b91a9daef9dd6763d2d90f5f3c2.png"
          width={100}
          height={100}
          alt=""
        />
      </div>
      <div className={`${styles.contents} ${styles.engineering_contents}`}>
        <Image
          src="https://cdn.dribbble.com/userupload/45078980/file/cc08a315e064b0f56022ef6cbf5d4afc.jpg"
          width={100}
          height={100}
          alt=""
        />
      </div>
      <div className={`${styles.contents} ${styles.management_contents}`}>
        <Image
          src="https://cdn.dribbble.com/userupload/45103863/file/ea0f97228179d31038010403bf3c6d0f.jpg"
          width={100}
          height={100}
          alt=""
        />
      </div>
    </div>
  )
}