import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";

export const SocialButtons = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href={`#`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(159 159 159)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-command-icon lucide-command"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/></svg>
            <span className={styles.text}>About</span>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href={`#`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(159 159 159)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-up-down-icon lucide-chevrons-up-down"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>
            <span className={styles.text}>Posts</span>
          </Link>
        </li>
        <li className={`${styles.socials} ${styles.item}`}>
          <div className={styles.scroller}>
            <Link href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(159 159 159)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
              <span className={styles.text}>Socials</span>
            </Link>
            <div className={styles.social_icons}>
              <Link href="#">
                <Image width="25" height="25" src="https://img.icons8.com/ios/100/instagram-new--v1.png" alt="instagram-new--v1"/>
              </Link>
              <Link href="#">
                <Image width="25" height="25" src="https://img.icons8.com/ios/100/linkedin.png" alt="linkedin"/>
              </Link>
              <Link href="#">
                <Image width="25" height="25" src="https://img.icons8.com/ios-glyphs/90/twitterx--v2.png" alt="twitterx--v2"/>
              </Link>
              <Link href="#">
                <Image width="25" height="25" src="https://img.icons8.com/ios/100/youtube-squared.png" alt="youtube-squared"/>
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  )
}
