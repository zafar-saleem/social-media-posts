import Image from "next/image";
import styles from "./permissions.module.css";
import media from "./assets/image.png";

export const Permissions = () => {
  return (
    <div className={styles.permissions}>
      <header className={styles.header}>
        <button className={styles.btn_close}>+</button>
      </header>
      <main className={styles.contents}>
        <span className={styles.title}>Camera permission replied</span>
        <p className={styles.text}>To make video calls, please turn on the camera permission on your device</p>
        <figure className={styles.media_container}>
          <Image
            src={media}
            width={500}
            height={250}
            alt=""
          />
          <figcaption className={styles.controls}>
            <button className={`button_one  ${styles.btn_play}`}>
              <span className={`${styles.label}`}>Watch tutorial</span>
              <span className={styles.icon}>
                <svg
                  width="12"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(255 255 255)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-youtube-icon lucide-youtube"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <path d="m10 15 5-3-5-3z"/>
                </svg>
              </span>
            </button>
          </figcaption>
        </figure>
      </main>
      <div className={styles.divider} />
      <footer className={styles.footer}>
        <button className={`button_one ${styles.btn_cancel}`}><span>Cancel</span></button>
        <button className={`button_one ${styles.btn_on}`}>
          <span>Turn</span> <span>device</span> <span>camera</span> <span>on</span>
        </button>
      </footer>
    </div>
  )
}