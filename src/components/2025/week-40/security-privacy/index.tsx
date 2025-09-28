import styles from "./privacy.module.css";

export const SecurityPrivacy = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <ul className={styles.tab_list}>
          <li className={styles.list_item}>
            <label className={styles.item_tab}>
              <input type="radio" className={styles.item_input} name="tab" />
              <span className={styles.item_label}>Profile</span>
            </label>
          </li>
          <li className={styles.list_item}>
            <label className={styles.item_tab}>
              <input type="radio" className={styles.item_input} name="tab" defaultChecked />
              <span className={styles.item_label}>Security</span>
            </label>
          </li>
          <li className={styles.list_item}>
            <label className={styles.item_tab}>
              <input type="radio" className={styles.item_input} name="tab" />
              <span className={styles.item_label}>Team</span>
            </label>
          </li>
          <li className={styles.list_item}>
            <label className={styles.item_tab}>
              <input type="radio" className={styles.item_input} name="tab" />
              <span className={styles.item_label}>Plan</span>
            </label>
          </li>
          <li className={styles.list_item}>
            <label className={styles.item_tab}>
              <input type="radio" className={styles.item_input} name="tab" />
              <span className={styles.item_label}>Billing</span>
            </label>
          </li>
        </ul>
      </header>
      <main className={styles.contents}>
        <h1>Security & Privacy</h1>
        <p className={styles.desc}>Manage your account security with these settings</p>
        <div>
        <form className={styles.separator}>
          <div className={styles.form_block}>
            <div className={styles.control}>
              <span className={styles.title}>Update password</span>
              <button className={`${styles.button_update} ${styles.button}`} type="button">Update</button>
            </div>
            <div className={styles.form_block}>
              <label className={styles.form_field}>
                <span className={styles.form_label}>Current password</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(171 173 179)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-lock-icon lucide-lock ${styles.lock_icon}`}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <input type="password" className={styles.form_input} placeholder="Enter password" />
                <button className={styles.show_icon_button}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(171 173 179)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-eye-off-icon lucide-eye-off ${styles.show_icon}`}><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/></svg>
                </button>
              </label>
            </div>
            <div className={`${styles.flex_col} ${styles.form_block}`}>
              <label className={styles.form_field}>
                <span className={styles.form_label}>New password</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(171 173 179)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-lock-icon lucide-lock ${styles.lock_icon}`}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <input type="password" className={styles.form_input} placeholder="Enter new password" />
                <button className={styles.show_icon_button}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(171 173 179)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-eye-off-icon lucide-eye-off ${styles.show_icon}`}><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/></svg>
                </button>
              </label>
              
              <label className={styles.form_field}>
                <span className={styles.form_label}>Confirm password</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(171 173 179)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-lock-icon lucide-lock ${styles.lock_icon}`}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <input type="password" className={styles.form_input} placeholder="Confirm password" />
                <button className={styles.show_icon_button}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(171 173 179)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-eye-off-icon lucide-eye-off ${styles.show_icon}`}><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/></svg>
                </button>
              </label>
            </div>
          </div>
        </form>
        <form>
          <div className={styles.form_block}>
            <div className={styles.control}>
              <span className={styles.title}>Recovery settings</span>
            </div>
            <label className={styles.form_field}>
              <span className={styles.form_label}>Recovery email</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(171 173 179)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-mail-icon lucide-mail ${styles.lock_icon}`}><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
              <input type="email" className={styles.form_input} placeholder="Enter recovery email" />
            </label>
            <label className={styles.form_field}>
              <span className={styles.form_label}>Recovery phone</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(171 173 179)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-smartphone-icon lucide-smartphone ${styles.lock_icon}`}><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
              <input type="number" required pattern="[0-9]" className={`${styles.form_phone} ${styles.form_input}`} placeholder="Enter recovery phone" />
              <button>Verify</button>
            </label>
          </div>
        </form>
        </div>
      </main>
    </div>
  )
}