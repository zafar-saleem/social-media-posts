import styles from "./styles.module.css";

export const CTAButtonHover = () => {
  return (
    <button className={styles.button}>
      <div className={styles.button_slider}>
        <span className={styles.button_initlabel}>Book a call</span>
        <span className={styles.button_hoverlabel}>
          Say hi
          <svg
            width="24" height="24" viewBox="0 0 24 24"
            fill="rgb(255 255 255)" stroke="rgb(51 127 129)" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            className="lucide lucide-send-icon lucide-send">
              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/>
              <path d="m21.854 2.147-10.94 10.939" />
          </svg>
        </span>
      </div>
    </button>
  )
}