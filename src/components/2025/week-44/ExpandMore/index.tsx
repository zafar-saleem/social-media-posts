import styles from "./expand.module.css";
import Image from "next/image";
import profileImage from "./assets/image.png";

export const ExpandableMore = () => {
  return (
    <section className={styles.wrapper}>
      <Image
        src={profileImage}
        width={50}
        height={50}
        alt=""
      />
      <div className={styles.container}>
        <span className={styles.name}>Zafar Saleem</span>
        <label className={`${styles.button} ${styles.button_expand}`}>
          <input type="checkbox" />
          {/* <span className={styles.label_more}> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(193 193 193)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`lucide lucide-ellipsis-icon lucide-ellipsis ${styles.label_more}`}><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
          {/* </span> */}
          {/* <span className={styles.label_close}> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(193 193 193)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`${styles.label_close} lucide lucide-x-icon lucide-x`}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          {/* </span> */}
        </label>
        <button className={`${styles.button} ${styles.button_share}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(193 193 193)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
        </button>
        <button className={`${styles.button} ${styles.button_twitter}`}>
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="22" height="22" fill="none" stroke="rgb(193 193 193)"><path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 8.6484375 9 L 13.259766 9 L 15.951172 12.847656 L 19.28125 9 L 20.732422 9 L 16.603516 13.78125 L 21.654297 21 L 17.042969 21 L 14.056641 16.730469 L 10.369141 21 L 8.8945312 21 L 13.400391 15.794922 L 8.6484375 9 z M 10.878906 10.183594 L 17.632812 19.810547 L 19.421875 19.810547 L 12.666016 10.183594 L 10.878906 10.183594 z"/></svg>
        </button>
      </div>
      <p>Hi, I build clean and modern websites, landing pages and web apps that helps ambitious brands stand and grow</p>
    </section>
  )
}
