import Link from "next/link";
import styles from "./styles.module.css";

export const ProjectCard = () => {
  return (
    <section className={styles.card}>
      <div className={styles.box}>
        <div className={styles.breadcrumb}>
          <Link href="#">One-offs</Link> 
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(142 141 143)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
          <Link href="#">Web</Link>
        </div>
        <span className={styles.timestamp}>Due Jab 20</span>
      </div>


      <div className={styles.contents}>
        <h1 className={styles.title}>Landing Page Design & Dev For Xenon</h1>
        <div className={styles.progress}>
          <span className={styles.label}>Progress</span>
          <span className={styles.completion}>100%</span>
          <div className={styles.progress_bar}></div>
        </div>
      </div>


      <div className={styles.collaborators}>
        <span className={styles.collab_title}>Collaborators</span>
        <div className={styles.collab_list}>
          <Link href="#">M</Link>
          <Link href="#">J</Link>
          <Link href="#">T</Link>
        </div>

        <span className={styles.status}>completed</span>

        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(142 141 143)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
      </div>
    </section>
  )
}