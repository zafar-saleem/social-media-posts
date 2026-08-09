import Link from "next/link";
import styles from "./styles.module.css";
import { Temporal } from "@js-temporal/polyfill";
import Image from "next/image";

export const IslandNavMenu = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_header}>
        <label className={styles.header_menu}>
          <input type="checkbox" className={styles.menu_input} />
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </div>
          <div>
            <span className={styles.menu_text}>Menu</span>
            <span className={styles.menu_text}>Close</span>
          </div>
        </label>
        <p className={styles.header_time}>{String(Temporal.Now.plainTimeISO().hour).padStart(2, "0")}:{String(Temporal.Now.plainTimeISO().minute).padStart(2, "0")}</p>
      </div>
      <div className={styles.nav_list}>
        <span className={styles.list_label}>Menu</span>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <Link href="#">
              <div>
                <span>About</span>
                <span>About</span>
              </div>
            </Link>
          </li>
          <li className={styles.list_item}>
            <Link href="#">
              <div>
                <span>Pricing</span>
                <span>Pricing</span>
              </div>
            </Link>
          </li>
          <li className={styles.list_item}>
            <Link href="#">
              <div>
                <span>Resources</span>
                <span>Resources</span>
              </div>
            </Link>
          </li>
          <li className={styles.list_item}>
            <Link href="#">
              <div>
                <span>Our Features</span>
                <span>Our Features</span>
              </div>
            </Link>
          </li>
        </ul>
        <span className={styles.list_label}>Legal</span>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <Link href="#">
              <div>
                <span>Privacy Policy</span>
                <span>Privacy Policy</span>
              </div>
            </Link>
          </li>
          <li className={styles.list_item}>
            <Link href="#">
              <div>
                <span>Terms & Conditions</span>
                <span>Terms & Conditions</span>
              </div>
            </Link>
          </li>
        </ul>
        <span className={styles.list_label}>Social media</span>
        <ul className={`${styles.list} ${styles.social}`}>
          <li className={styles.list_item}>
            <Link href="#">
              <Image width={24} height={24} src="data:image/png;base64,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" alt="instagram-new--v1" />
            </Link>
          </li>
          <li className={styles.list_item}>
            <Link href="#">
              <Image width={24} height={24} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC+klEQVR4nO2ZSWhUQRCGP424K24J7oiCOyoeBAUVPAQEEQlxuehBD4ogBD3pyZjcNOjJmwt6EEXwIgriRUGiYkxEQVDcUC+iMZt7kpaCP9CMSd6bl2ReT5wfipmp6aqpf17339XvQQEFFNAXlADVQD3QBrgcWxvwGKhSLYmwFWhJoXjXg1kt5UlIdAZQvMuwzmzIlAR2JVyGNQPFcYhUB1Csi7BjcYg0BFCoizATgEi0BlCoizCb+pFweWKR+K+IVETkOJdFQV+A+Yo7kGsiP4FlveQYC7yIkec3sEExG4E/aUytZ8BIYAhww/NvV541QHvE5rZLY5cATWmukeOKmQ58lu8rMFv+qhh7wTTgXVprxMk6vKmxxfPfAYYCw4D73cRd0ZUcBTxIQML1NxGzD8AkxZ71/Aflm5exNz0ERovotYQk3EAQMbuq2DHeIjdBWC7/PvneeO14TR9IuIEiYrZT8as99XkqQTBcABbp/d4+knADScRUZ45yHPX8JzPyl2Ypsy7XRMzuAkVa5LWezFrxhvEJZNalQcTssPLM9c41H4HJ8p/OFyJ/gFXKtcfzm0IhxXqeD0ScCrWCDZc9/275VgK/8oHIW09mp2hqOe0ntq8YjoROpBlYqlwT9Vrq3cyolRgUSRyCJNIObFKedcB7YKo+n/LGmTwbZgGNIRLZrxwLvQJvqq8aATzxBME2TtQBB0WkRvEmsy8zvrOdvKtd/yHfK2Cc/JdCIXJdc97akXvdfP8NWKD8hzz/GfkmJGjlI5EtiTo1izZ9LvYy7hEwXF3vbc+/zVtTHWkRMVmdGeMQ1WU2xjDDO4g1atEbTqRBxPaEFYrZEfNesf3j6xVT5vlveYLQkEsiJrObNX6tzh5x/4DXah57wmLge66I2G2brsbwU4J1dT6ihopcr5E0LRKDhkhLAEW6GP1cJOoDKNT1x2OFOPtB2lY5GB69NemMEwvlAT8MLYtLwifTHNiVKCMhinWzuS6lR3Kt+u3KbKZTAQUUwD/4C68XAvRNax0sAAAAAElFTkSuQmCC" alt="twitterx--v1" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
