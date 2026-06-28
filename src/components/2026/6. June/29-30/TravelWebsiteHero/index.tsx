import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { Russo_One } from "next/font/google";

const Ruso = Russo_One({
  subsets: ["latin"],
  weight: "400",
});

export const TravelHeroSection = () => {
  return (
    <div className={`${styles.hero}`}>
      <Image
        src="https://images.pexels.com/photos/2259226/pexels-photo-2259226.jpeg"
        height={2000}
        width={2000}
        alt=""
      />
      <header className={styles.hero_header}>
        <Link href="#" className={`${Ruso.className} ${styles.hero_logo}`}>
          Logo
        </Link>
        <nav className={`${styles.hero_navigation} ${styles.navigation_desktop}`}>
          <ul className={styles.navigation_list}>
            <li className={styles.navigation_item}>
              <Link href="#" className={styles.navigation_link}>Hotels</Link>
            </li>
            <li className={styles.navigation_item}>
              <Link href="#" className={styles.navigation_link}>Resorts</Link>
            </li>
            <li className={styles.navigation_item}>
              <Link href="#" className={styles.navigation_link}>Holiday Homes</Link>
            </li>
            <li className={styles.navigation_item}>
              <Link href="#" className={styles.navigation_link}>Staycations</Link>
            </li>
            <li className={styles.navigation_item}>
              <Link href="#" className={styles.navigation_link}>New Deals</Link>
            </li>
            <li className={styles.navigation_item}>
              <Link href="#" className={styles.navigation_link}>Reviews</Link>
            </li>
            <li className={styles.navigation_item}>
              <Link href="#" className={styles.navigation_link}>Blog</Link>
            </li>
            <li className={styles.navigation_item}>
              <Link href="#" className={styles.navigation_link}>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className={`${styles.hero_localization} ${styles.localization_desktop}`}>
        </div>
        
        
        
        <nav className={`${styles.hero_navigation} ${styles.navigation_mobile}`}>
          <label className={styles.menu_button}>
            <input type="checkbox" className={styles.menu} />
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </label>
          <ul className={styles.navigation_list}>
            <li className={styles.navigation_item}>
              <Link href="#" className={styles.navigation_link}>Hotels</Link>
            </li>
            <li className={styles.navigation_item}>
              <Link href="#" className={styles.navigation_link}>Resorts</Link>
            </li>
            <li className={styles.navigation_item}>
              <Link href="#" className={styles.navigation_link}>Holiday Homes</Link>
            </li>
            <li className={styles.navigation_item}>
              <Link href="#" className={styles.navigation_link}>Staycations</Link>
            </li>
            <li className={styles.navigation_item}>
              <Link href="#" className={styles.navigation_link}>New Deals</Link>
            </li>
            <li className={styles.navigation_item}>
              <Link href="#" className={styles.navigation_link}>Reviews</Link>
            </li>
            <li className={styles.navigation_item}>
              <Link href="#" className={styles.navigation_link}>Blog</Link>
            </li>
            <li className={styles.navigation_item}>
              <Link href="#" className={styles.navigation_link}>Contact</Link>
            </li>
          </ul>
          <div className={styles.hero_localization}>
            {/* <Link href="#">ENG</Link> / <Link href="#">ESP</Link> / <Link href="#">FRA</Link> */}
          </div>
        </nav>
      </header>

      <form className={styles.hero_form}>
        <h1 className={styles.hero_title}>
          <span>Adventure Awaits You - AT</span>
          <span>The Best Prices</span>
        </h1>
        <p className={styles.hero_copy}>Find the best discounts on flights, hotels, and experiences worldwide!</p>
        <div className={styles.form}>
          <div className={styles.form_field}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B505A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
            <input type="text" placeholder="Location" />
          </div>
          <div className={styles.form_field}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B505A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days-icon lucide-calendar-days"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
            <input type="text" placeholder="Departure" />
          </div>
          <div className={styles.form_field}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B505A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days-icon lucide-calendar-days"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
            <input type="text" placeholder="Return" />
          </div>
          <button type="button" className={styles.form_submit}>Submit</button>
        </div>
      </form>
    </div>
  )
}