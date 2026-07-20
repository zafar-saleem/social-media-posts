import Image from "next/image";
import styles from "./styles.module.css";

// <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(251 255 254)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-snow-icon lucide-sun-snow"><path d="M10 21v-1"/><path d="M10 4V3"/><path d="M10 9a3 3 0 0 0 0 6"/><path d="m14 20 1.25-2.5L18 18"/><path d="m14 4 1.25 2.5L18 6"/><path d="m17 21-3-6 1.5-3H22"/><path d="m17 3-3 6 1.5 3"/><path d="M2 12h1"/><path d="m20 10-1.5 2 1.5 2"/><path d="m3.64 18.36.7-.7"/><path d="m4.34 6.34-.7-.7"/></svg>
// 
{/* <img src="" alt="github"></img> */}
export const AppsIntegration = () => {
  return (
    <div className={styles.intergration}>
      <div className={styles.box}>
        <div className={styles.group}>
          <div className={`${styles.logo} ${styles.intergration_logo}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgb(251 255 254)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-snow-icon lucide-sun-snow"><path d="M10 21v-1"/><path d="M10 4V3"/><path d="M10 9a3 3 0 0 0 0 6"/><path d="m14 20 1.25-2.5L18 18"/><path d="m14 4 1.25 2.5L18 6"/><path d="m17 21-3-6 1.5-3H22"/><path d="m17 3-3 6 1.5 3"/><path d="M2 12h1"/><path d="m20 10-1.5 2 1.5 2"/><path d="m3.64 18.36.7-.7"/><path d="m4.34 6.34-.7-.7"/></svg>
          </div>
          
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />

          <div className={`${styles.logo} ${styles.target_logo}`}>
            <Image width="64" height="64" src="https://img.icons8.com/neon/96/github.png" alt="github" />
          </div>
        </div>



        <article className={styles.group}>
          <h1 className={styles.intergration_title}>Connect App to Github</h1>
          <p className={styles.intergration_text}>Approve access for your app, read before approval</p>
        </article>



        <div className={styles.group}>
          <button className={`${styles.button_cancel} ${styles.button} button_one`}>
            <span>Cancel</span>
          </button>
          <button className={`${styles.button_approve} ${styles.button} button_one`}>
            <span>Approve</span>
          </button>
        </div>
      </div>






      <div className={styles.box}>
        <span className={styles.title}>Github would like to:</span>
        <ul>
          <li>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(215 90 147)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <span className={styles.text}>View your public repositories and profile</span>
          </li>
          <li>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(215 90 147)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <span className={styles.text}>Create and manage your pull requests</span>
          </li>
          <li>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(215 90 147)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <span className={styles.text}>Read and write to issues and discussions</span>
          </li>
          <li>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(215 90 147)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <span className={styles.text}>Access repos webhooks and notifications</span>
          </li>
          <li>
            <div className={styles.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(215 90 147)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <span className={styles.text}>Manage team memberships and collaborators</span>
          </li>
        </ul>
      </div>
    </div>
  )
}