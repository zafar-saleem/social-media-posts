import Link from "next/link";
import styles from "./styles.module.css";

export const CreateNewButton = () => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <input type="checkbox" className={styles.input} />
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(39 39 42)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        <span className={styles.text}>Create New</span>
      </label>
      <div className={styles.list_wrapper}>
        {/* <button className={styles.close_button}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(36 36 39)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button> */}
        <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="#" className={styles.link}>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(53 142 228)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-icon lucide-folder"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
            </div>
            <div className={styles.box}>
              <span className={styles.text}>New project</span>
              <span className={styles.copy}>Start a fresh workspace</span>
            </div>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="#" className={styles.link}>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(214 62 83)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-line-icon lucide-check-line"><path d="M20 4L9 15"/><path d="M21 19L3 19"/><path d="M9 15L4 10"/></svg>
            </div>
            <div className={styles.box}>
              <span className={styles.text}>New task</span>
              <span className={styles.copy}>Add something to your list</span>
            </div>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="#" className={styles.link}>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(227 159 42)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-notebook-pen-icon lucide-notebook-pen"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg>
            </div>
            <div className={styles.box}>
              <span className={styles.text}>New note</span>
              <span className={styles.copy}>Capture an idea quickly</span>
            </div>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="#" className={styles.link}>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(52 179 136)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-icon lucide-file"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/></svg>
            </div>
            <div className={styles.box}>
              <span className={styles.text}>New file</span>
              <span className={styles.copy}>Upload or create a file</span>
            </div>
          </Link>
        </li>
      </ul>
      </div>
    </div>
  )
}