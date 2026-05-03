import Link from "next/link";
import styles from "./styles.module.css";

export const ExpandableMenu = () => {
  return (
    <div className={styles.container}>
      <label className={styles.button_label}>
        <input type="checkbox" className={styles.button_input} />
        <div className={styles.button_icon}>
          <div />
          <div />
          <div>
            <span />
            <span />
            <span />
          </div>
        </div>
      </label>





      <div className={styles.menu}>
        <div className={styles.sub_menu}>
          <div>
            <span className={styles.title}>Contents 0%</span>
            <label className={styles.submenu_label}>
              <input type="checkbox" />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(141 141 141)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-icon lucide-list"><path d="M3 5h.01"/><path d="M3 12h.01"/><path d="M3 19h.01"/><path d="M8 5h13"/><path d="M8 12h13"/><path d="M8 19h13"/></svg>
            </label>
          </div>
          <ol>
            <li>
              <Link href={`#`}>Overview</Link>
            </li>
            <li>
              <Link href={`#`}>Monitored Issues</Link>
            </li>
            <li>
              <Link href={`#`}>Protocol</Link>
            </li>
            <li>
              <Link href={`#`}>Next Steps</Link>
            </li>
          </ol>
        </div>
        <div className={styles.notifications}>
          <span>Get protocol items</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(141 141 141)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag-icon lucide-shopping-bag"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>
        </div>
      </div>
    </div>
  )
}