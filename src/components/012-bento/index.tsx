import styles from "./bento.module.css";
import media from "./assets/dashboard.png"
import Image from "next/image";

export const Bento = () => {
  return (
    <div className={styles.bento_container}>
      <span className={`${styles.bento_badge} ${styles.bento_title}`}>Your Cloud</span>
      <p>
        On-Prem For The First Time, Made Possible With Hardware And Software Co-Design.
      </p>
      <div className={styles.bento_button_container}>
        <div>
          <button className={styles.bento_button}>
            <div className={styles.bento_button_contents}>
              <span className={styles.bento_button_icon} />
              <span className={styles.bento_button_label}>AI applications</span>
            </div>
            <span className={styles.bento_button_bg} />
          </button>
          <article className={`${styles.bento_button_details}`}>
            <span className={styles.bento_badge}>AI Applications</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, harum!</p>
          </article>

          <button className={styles.bento_button}>
            <div className={styles.bento_button_contents}>
              <span className={styles.bento_button_icon} />
              <span className={styles.bento_button_label}>Resolve Issues</span>
            </div>
            <span className={styles.bento_button_bg} />
          </button>
          <article className={`${styles.bento_button_details}`}>
            <span className={styles.bento_badge}>Resolve issues</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, harum!</p>
          </article>
        </div>
        <div>
          <button className={styles.bento_button}>
            <div className={styles.bento_button_contents}>
              <span className={styles.bento_button_icon} />
              <span className={styles.bento_button_label}>Power Observability</span>
            </div>
            <span className={styles.bento_button_bg} />
          </button>

          <article className={`${styles.bento_button_details}`}>
            <span className={styles.bento_badge}>Power Observability</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, harum!</p>
          </article>
        </div>
      </div>
      <Image
        src={media}
        // width={100}
        // height={100}
        alt=""
        className={styles.bento_media}
        objectFit="contain"
      />
    </div>
  )
}