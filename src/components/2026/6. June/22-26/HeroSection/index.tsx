import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import visuals from "./assets/Visuals.png";
import { Coiny } from "next/font/google";

const coiny = Coiny({
  subsets: ["latin"],
  weight: "400",
});

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <DesktopHeader />
      <MobileHeader />
      <HeroSection />
    </div>
  )
}

const HeroSection = () => {
  return (
    <div className={styles.hero_section}>
      <article className={styles.hero_article}>
        <h1 className={styles.hero_title}>
          <span>Make sense of</span>
          <span>complex data with</span>
          <span>real-time insights</span>
        </h1>
        <p className={styles.hero_copy}>
          Revolutionize your data strategy with a platform designed for scalability, security and performance
        </p>
        <div className={styles.hero_actions}>
          <Link className={styles.button_cta} href="#">Start your free demo</Link>
          <Link href="#" className={styles.button}>
            <span>Find out more</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(10 10 10)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
          </Link>
        </div>
      </article>
      <figure>
        <Image
          src={visuals}
          height={500}
          width={500}
          alt=""
          className={styles.hero_visuals}
        />
      </figure>
    </div>
  )
}

const MobileHeader = () => {
  return (
    <header className={`${styles.hero_header} ${styles.hero_header_mobile}`}>
        <Link href="#" className={`${styles.hero_logo}`}>Coiny</Link>
        <div className={styles.block}>
          <Link href="#" className={styles.button_register}>Register started for free</Link>
        </div>
        <nav className={`${styles.navigation}`}>
          <label className={styles.hamburger_menu}>
            <input type="checkbox" className={styles.input} />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(10 10 10)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(10 10 10)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </label>
          <ul className={styles.hero_list}>
            <li className={styles.list_item}>
              <Link className={styles.item_link} href="#">Features</Link>
            </li>
            <li className={styles.list_item}>
              <Link className={styles.item_link} href="#">Pricing</Link>
            </li>
            <li className={styles.list_item}>
              <Link className={styles.item_link} href="#">About</Link>
            </li>
            <li className={styles.list_item}>
              <Link className={styles.item_link} href="#">Blog</Link>
            </li>
            <li className={styles.list_item}>
              <Link className={styles.item_link} href="#">Support</Link>
            </li>
            <li>
              <Link href="#" className={`${styles.item_link} ${styles.link_login}`}>
                <span>Login</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(10 10 10)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
  )
}

const DesktopHeader = () => {
  return (
    <header className={`${styles.hero_header} ${styles.hero_header_desktop}`}>
        <Link href="#" className={`${styles.hero_logo}`}>Coiny</Link>
        <nav className={`${styles.navigation} ${styles.desktop_nav}`}>
          <ul className={styles.hero_list}>
            <li className={styles.list_item}>
              <Link className={styles.item_link} href="#">Features</Link>
            </li>
            <li className={styles.list_item}>
              <Link className={styles.item_link} href="#">Pricing</Link>
            </li>
            <li className={styles.list_item}>
              <Link className={styles.item_link} href="#">About</Link>
            </li>
            <li className={styles.list_item}>
              <Link className={styles.item_link} href="#">Blog</Link>
            </li>
            <li className={styles.list_item}>
              <Link className={styles.item_link} href="#">Support</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.block}>
          <Link href="#" className={styles.link_login}>
            <span>Login</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(10 10 10)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
          </Link>
          <Link href="#" className={styles.button_register}>Register started for free</Link>
        </div>
      </header>
  )
}