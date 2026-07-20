import Link from "next/link";
import styles from "./actions.module.css";
import Image from "next/image";

// const ADD_TASK = <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#262626" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-plus-icon lucide-clipboard-plus"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 14h6"/><path d="M12 17v-6"/></svg>;
// const ADD_USER = <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#262626" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-plus-icon lucide-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>;
// const CONNECT = <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#262626" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-unplug-icon lucide-unplug"><path d="m19 5 3-3"/><path d="m2 22 3-3"/><path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"/><path d="M7.5 13.5 10 11"/><path d="M10.5 16.5 13 14"/><path d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"/></svg>;
const PROJECT = <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#262626" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grid2x2-plus-icon lucide-grid-2x2-plus"><path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"/><path d="M16 19h6"/><path d="M19 22v-6"/></svg>;

export const GridActions = () => {
  return (
    <div className={styles.grid}>
      <Link href="#" className={styles.task}>
        <span className={styles.icon}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-plus-icon lucide-clipboard-plus">
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
            <path className={styles.icon_line_vertical} d="M9 14h6"/>
            <path className={styles.icon_line_horizontal} d="M12 17v-6"/>
          </svg>     
        </span>
        <span className={styles.title}>Create new task</span>
        <p className={styles.description}>
          Boost your productivity by completing new tasks.
        </p>
      </Link>
      <Link href="#" className={styles.member}>
        <span className={styles.icon}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-plus-icon lucide-user-plus">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" className={styles.bottom}/>
            <circle cx="9" cy="7" r="4" className={styles.top}/>
            <line x1="19" x2="19" y1="8" y2="14" className={styles.horizontal}/>
            <line x1="22" x2="16" y1="11" y2="11" className={styles.vertical}/>
          </svg>
        </span>
        <span className={styles.title}>Add new member</span>
        <p className={styles.description}>
          Create your dream team by adding new team members.
        </p>
      </Link>
      <Link href="#" className={styles.connect}>
        <span className={styles.icon}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-unplug-icon lucide-unplug">
            
            <path d="m2 22 3-3" className={`${styles.plug_male}`}/>
            <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" className={styles.plug_male}/>
            <path d="M7.5 13.5 10 11" className={`${styles.plug} ${styles.plug_male}`}/>

            <path d="m19 5 3-3" className={styles.plug_female}/>
            <path d="M10.5 16.5 13 14" className={`${styles.plug} ${styles.plug_male}`}/>
            <path d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z" className={styles.plug_female}/>
          </svg>
        </span>
        <span className={styles.title}>Connect new apps</span>
        <p className={styles.description}>
          Use the power of external tools by adding integrations.
        </p>
      </Link>
      <Link href="#" className={styles.project}>
        <span className={styles.icon}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#262626" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-grid2x2-plus-icon lucide-grid-2x2-plus">
            <path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" className={styles.dashboard}/>
            <path d="M16 19h6"/>
            <path d="M19 22v-6"/>
          </svg>
        </span>
        <span className={styles.title}>Create new project</span>
        <p className={styles.description}>
          Work on new and exciting project with your whole team.
        </p>
      </Link>
    </div>
  )
}