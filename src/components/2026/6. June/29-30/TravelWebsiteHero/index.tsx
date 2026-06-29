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
          Voyaj
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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </label>
          <ul className={styles.navigation_list}>
            <li className={styles.navigation_item}>
              <Link href="#" className={styles.navigation_link}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hotel-icon lucide-hotel"><path d="M10 22v-6.57"/><path d="M12 11h.01"/><path d="M12 7h.01"/><path d="M14 15.43V22"/><path d="M15 16a5 5 0 0 0-6 0"/><path d="M16 11h.01"/><path d="M16 7h.01"/><path d="M8 11h.01"/><path d="M8 7h.01"/><rect x="4" y="2" width="16" height="20" rx="2"/></svg>
                <span>Hotels</span>
              </Link>
            </li>
            <li className={styles.navigation_item}>              
              <Link href="#" className={styles.navigation_link}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cable-car-icon lucide-cable-car"><path d="M10 3h.01"/><path d="M14 2h.01"/><path d="m2 9 20-5"/><path d="M12 12V6.5"/><rect width="16" height="10" x="4" y="12" rx="3"/><path d="M9 12v5"/><path d="M15 12v5"/><path d="M4 17h16"/></svg>
                <span>Resorts</span>
              </Link>
            </li>
            <li className={styles.navigation_item}>
              <Link href="#" className={styles.navigation_link}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tent-tree-icon lucide-tent-tree"><circle cx="4" cy="4" r="2"/><path d="m14 5 3-3 3 3"/><path d="m14 10 3-3 3 3"/><path d="M17 14V2"/><path d="M17 14H7l-5 8h20Z"/><path d="M8 14v8"/><path d="m9 14 5 8"/></svg>
                <span>Holiday Homes</span>
              </Link>
            </li>
            <li className={styles.navigation_item}>              
              <Link href="#" className={styles.navigation_link}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-parasol-icon lucide-parasol"><path d="M12.5 11.134 18.196 21"/><path d="M20.425 5.299a10 10 0 0 0-16.941 9.78c.183.563.843.774 1.355.478L20.16 6.711c.512-.296.66-.973.264-1.413"/><path d="M21 21H3"/></svg>
                <span>Staycations</span>
              </Link>
            </li>
            <li className={styles.navigation_item}>
              <Link href="#" className={styles.navigation_link}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-handshake-icon lucide-heart-handshake"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"/></svg>
                <span>New Deals</span>
              </Link>
            </li>
            <li className={styles.navigation_item}>
              <Link href="#" className={styles.navigation_link}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-plus-icon lucide-star-plus"><path d="M11.013 18.582 6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904L20 11.5"/><path d="M15 18h6"/><path d="M18 15v6"/></svg>
                <span>Reviews</span>
              </Link>
            </li>
            <li className={styles.navigation_item}>
              <Link href="#" className={styles.navigation_link}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rss-icon lucide-rss"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>
                <span>Reviews</span>
              </Link>
            </li>
            <li className={styles.navigation_item}>
              <Link href="#" className={styles.navigation_link}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-open-icon lucide-mail-open"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>
                <span>Contact</span>
              </Link>
            </li>
          </ul>
          <div className={styles.hero_localization}>
            {/* <Link href="#">ENG</Link> / <Link href="#">ESP</Link> / <Link href="#">FRA</Link> */}
          </div>
        </nav>
      </header>
      <div className={styles.form_container}>
        <form className={styles.hero_form}>
          <h1 className={styles.hero_title}>
            <span>Find Your Perfect Escape In</span>
            <span>Just A Few Clicks</span>
          </h1>
          <p className={styles.hero_copy}>Compare thousands of flights, hotels and hidden gems worldwide. Save upto 30% with exclusive, member-only rates</p>
          <div className={styles.form}>
            <div className={styles.form_field}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(0 0 0)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
              <input type="text" placeholder="Location" />
            </div>
            <div className={styles.form_field}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(0 0 0)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days-icon lucide-calendar-days"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
              <input type="text" placeholder="Departure" />
            </div>
            <div className={styles.form_field}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(0 0 0)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days-icon lucide-calendar-days"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
              <input type="text" placeholder="Return" />
            </div>
            <button type="button" className={styles.form_submit}>Explore Destinations</button>
          </div>
        </form>
        <div className={styles.hero_ratings}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffe004" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
          <span>4.8/5 rating by 12,000+ happy travelers</span>
        </div>
      </div>
    </div>
  )
}