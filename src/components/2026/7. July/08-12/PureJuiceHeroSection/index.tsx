import Link from "next/link";
import styles from "./styles.module.css";
import React from "react";
import { Lobster } from "next/font/google";
import Image from "next/image";
import image from "./assets/image.png";

const lobster = Lobster({
  variable: "--font-lobster",
  weight: "400",
});

export const PureJuiceHeroSection = () => {
  return (
    <div className={`${styles.hero} ${lobster.variable}`}>
      <header className={styles.hero_header}>
        <Link href="#">
          <h1>LOGO</h1>
        </Link>

        <Navigation />
        <ActionsSection />
      </header>
      <BrandSection />
    </div>
  )
}

const ActionsSection = () => {
  return (
    <div className={styles.nav_actions}>
      <button className={styles.button_search}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
      </button>
      <Link href="#" className={styles.button_cart}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
      </Link>
    </div>
  )
}

const Navigation = () => {
  return (
    <React.Fragment>
      <nav className={styles.nav_desktop}>
        <ul className={styles.menu_list}>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Shop</Link>
          </li>
          <li>
            <Link href="#">Juice Cleanoes</Link>
          </li>
          <li>
            <Link href="#">Subscriptions</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
        </ul>
      </nav>
      <nav className={styles.nav_mobile}>
        <label className={styles.mobile_breadcrumb}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          <input type="checkbox" />
        </label>
        <ul className={styles.menu_list}>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Shop</Link>
          </li>
          <li>
            <Link href="#">Juice Cleanoes</Link>
          </li>
          <li>
            <Link href="#">Subscriptions</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  )
}

const BrandSection = () => {
  return (
    <h1 className={`${styles.brand_section}`}>
      {/* Pure */}
      <span className={styles.brand_title}>Pure</span>
      <Image
        src={image}
        width={1000}
        height={1000}
        alt=""
        className={styles.hero_image}
      />
      {/* Juice */}
      <span className={styles.brand_title}>Juice</span>
    </h1>
  )
}
