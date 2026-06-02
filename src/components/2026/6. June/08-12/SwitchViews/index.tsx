import Image from "next/image";
import styles from "./styles.module.css";

export const SwitchViews = () => {
  return (
    <div className={styles.view}>
      <h1 className={styles.view_title}>Library</h1>
      <nav className={styles.view_nav}>
        <ul className={styles.nav_list}>
          <li className={styles.list_item}>
            <label className={styles.item_label}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(117 117 117)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-icon lucide-list"><path d="M3 5h.01"/><path d="M3 12h.01"/><path d="M3 19h.01"/><path d="M8 5h13"/><path d="M8 12h13"/><path d="M8 19h13"/></svg>
              <span className={styles.label_text}>List view</span>
              <input type="radio" className={`${styles.list_input} ${styles.label_input}`} name="item" defaultChecked />
            </label>
          </li>
          <li className={styles.list_item}>
            <label className={styles.item_label}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(117 117 117)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grid2x2-icon lucide-grid-2x2"><path d="M12 3v18"/><path d="M3 12h18"/><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
              <span className={styles.label_text}>Grid view</span>
              <input type="radio" className={`${styles.grid_input} ${styles.label_input}`} name="item" />
            </label>
          </li>
          <li className={styles.list_item}>
            <label className={styles.item_label}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(117 117 117)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-icon lucide-folder"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
              <span className={styles.label_text}>Collection</span>
              <input type="radio" className={`${styles.collection_input} ${styles.label_input}`} name="item" />
            </label>
          </li>
        </ul>
      </nav>


      <Views type="list" collection="" />
      <Views type="grid" collection="" />
      <Views type="collection" collection="entertainment" />
    </div>
  )
}

const Views = ({ type, collection }) => {
  return (
    <ul className={`${styles.views} ${styles[type]}`}>
      <li className={`${styles[type]}_${collection}`}>
        <Image
          src={`https://images.pexels.com/photos/27907108/pexels-photo-27907108.jpeg`}
          width="3000"
          height={`3000`}
          alt=""
        />
        <div>
          <span className={styles.list_title}>Echoes of Dust</span>
          <span className={styles.list_text}>Editorial Series</span>
        </div>
      </li>
      <li>
        <Image
          src={`https://images.pexels.com/photos/7272949/pexels-photo-7272949.jpeg`}
          width="3000"
          height={`3000`}
          alt=""
        />
        <div>
          <span className={styles.list_title}>Grace under pressure</span>
          <span className={styles.list_text}>Portrait Series</span>
        </div>
      </li>
      <li className={`${styles[type]}_${collection}`}>
        <Image
          src={`https://images.pexels.com/photos/6605437/pexels-photo-6605437.jpeg`}
          width="3000"
          height={`3000`}
          alt=""
        />
        <div>
          <span className={styles.list_title}>The Quiet Ones</span>
          <span className={styles.list_text}>Fashion Studies</span>
        </div>
      </li>
      <li>
        <Image
          src={`https://images.pexels.com/photos/36696346/pexels-photo-36696346.png`}
          width="3000"
          height={`3000`}
          alt=""
        />
        <div>
          <span className={styles.list_title}>Weight of Clarity</span>
          <span className={styles.list_text}>Street Services</span>
        </div>
      </li>
    </ul>
  )
}