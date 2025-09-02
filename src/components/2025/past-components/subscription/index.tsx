import Link from "next/link";
import styles from "./subscription.module.css";
import Image from "next/image";

const icon = {
  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAYAAACO98lFAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeUlEQVR4nO3auy4FURSH8e+4FmioUFK61KJ1eQGJRqUgkYjGA3gIiV5CLRHUtIiWzqWjoSFxz05mJyIuc86ZEXut/5fsB5hfMXv2XgNKKaWUUkopIzUBi8AC0IDDOoBd4C1bEzirBzj+ABDWDI4aAi4/AbhCmATuvgBwgzAHPH0DYB6hAqz88PDmEdqArRwAZhG6gcOcACYRBoDzKgDMIYwBt1UCmEKYBR5rADCBUMm5A5hFaAU26wRIGqELOCgAIFmEfuCsIIAkEUaBmwIBkkOYBh4KBkgGoZLtAK8lACSB0AKsl/TwySDslQzw7xGa6/gKNIMQmgeevSP8djXmBiFekl55Rwj1AifeEULtwI53hDhCW/OOEFsCXrwjhKaAe+8IoRHg2jtCqA849Y4Q6gT2vSPEe8cN7wi13ECbRKh2FmEaITSeYyplHiHOJy+8I8RJ9ZF3hHj42vaOEGoEVr0jxJazw1f4l2kYxw1mL02llFJKKaUUf947nhFGKjDcuCsAAAAASUVORK5CYII=",
};

export const Subscription = () => {
  return (
    <div className={styles.container}>
    <div className={styles.subscription_container}>
      <header className={styles.subscription_header}>
        <div className={styles.subscription_media} />
        <h1 className={styles.subscription_title}>Pioneer</h1>
        <span className={styles.subscription_subtitle}>for starters</span>
      </header>
      <main className={styles.subscription_contents}>
        <ul className={styles.contents_list}>
          <li className={styles.contents_list_item}>
            <Image src={icon.src} width={24} height={24} alt="" className={styles.icon_arrow} />
            <span className={`${styles.labels} ${styles.list_item_label_100}`}>Basic platform access</span>
          </li>
          <li className={styles.contents_list_item}>
            <Image src={icon.src} width={24} height={24} alt="" className={styles.icon_arrow} />
            <span className={`${styles.labels} ${styles.list_item_label_200}`}>Up to 10 projects</span>
          </li>
          <li className={styles.contents_list_item}>
            <Image src={icon.src} width={24} height={24} alt="" className={styles.icon_arrow} />
            <span className={`${styles.labels} ${styles.list_item_label_300}`}>Email support</span>
          </li>
          <li className={styles.contents_list_item}>
            <Image src={icon.src} width={24} height={24} alt="" className={styles.icon_arrow} />
            <span className={`${styles.labels} ${styles.list_item_label_400}`}>Community access</span>
          </li>
        </ul>
      </main>
      <footer className={styles.subscription_footer}>
        <span className={styles.footer_price}>€129</span>
        <span className={styles.footer_occurence}>per month</span>
      </footer>
      
    </div>
    <Link href="#" className={styles.subscription_cta}>
      Start free trial
    </Link>
    </div>
  )
}