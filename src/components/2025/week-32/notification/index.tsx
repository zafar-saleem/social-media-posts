import Image from "next/image";
import styles from "./notification.module.css";

export const Notification = () => {
  return (
    <div className={styles.container}>
      <label className={`${styles.button} button_three`}>
        <span className={styles.button_label}>Notification</span>
        <input type="checkbox" />
      </label>
      <div className={styles.notification}>
        <button className={styles.btn_close}>
          <span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(185 185 185)"
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={`lucide lucide-x-icon lucide-x ${styles.btn_close_icon}`}
            >
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
          </span>
        </button>
        <div className={styles.header}>
          <span className={styles.header_icon}>
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADaklEQVR4nO2YS2sUWRTHKxJQUQQVcXRlBHF8gwPik6hJn1M6yqxczehGfDEfYBSEXvqsc6uTILpzLbgQxW/gIG6G0RHBzTBOtOqcysKFIiqx5HQnppO0narOvUkX5A+XSyD39vnV/9zHuZ43J3sK/XhrxX+zwiuyKv7L+QbkH4P84uph/sErqgjlskFJa42LCUMo2wn50xiIFA9mLKXqIaR4MONTqqAw1DClCgZTaZpSUhyYAN4uMyBPs4NIqv/flueMBpUbBtvImbBX1hlM9rcMA7PszEA3LzYoFwnkvUH5EAD7hYFJvbSjAslPBBwYkGRCQO0BUy6n8278/HZpeDBeST3x2rAUbQ79uMcAnyNkQ8gPCSWeIqDZhaGpA8zTZgemrxR1WYSYNgwBP9cSoAU3+LgDkNQAf6RScjQ7DH/WK44errkhqiDAN52A5IAh4OcBDO1oCWDMEXnmDGTKNOPPBuVSufvfBdOCqO5QyF8cg6SNnLHiwjc3IPnVOQSOOTN6A9C72bRdqJdBuT2DIO/0OmMt+HEgwIM5U+RB6Mux0I9/I5A/84wl4PNOIHSvzheI3K0fX+5OOwn4Scaxcq0ULXICohe+XCAlholzEMZnszkpV5xA1IKQx7lAMP5l8hz8e5axAfA2JxBazBjg4exrQ6LrkPxYP4eewATyd5axqZd2OAEJfTmZB8L0Dm3Qcdob4BMG5BSh/JV1g/BciYDvZQRhwmhTFQKT9YT8OtcuV9utAicQwbFXC0eqOucQtZaccQISghyZemFLPD6dJGoNQhd6csAJiEG+NTNO1FrFH9poHULLWQP8ppkToz+sTtioHPtKUZd1EELZ18wJrdOrEJisbwacp4UH45XWQQxK30xCjKTWEhdpNdgMQg89mxDayt1pp1UQKvGeRmtidGFrb/k1pTq/Z1sGOJzohFUI4OHqaQ8yUCvYojXWIVIv7TDIr759KRCxkk4gEYHcIUhO9/cmqz3XqgDvbrQm1An9O+dXf2SA/3ByPmRNK3UiOBRvyeOEXmcI+b5+dUJZ5c2W0pG0qk8n7Zs5QcD/E8oNfcZp+cHMtgzGuyY7MfnuVA0euBL6vFe3aq/dZJAvfA+iPnhnxY8t9fcMLtdeYdQZQv7PIJM61fbBN4LR55jAj3cWLvg5zcmzrq8ScTsCoRqdVgAAAABJRU5ErkJggg=="
              width={30}
              height={30}
              alt=""
            />
          </span>
          <span className={styles.notification_title}>ALMOST THERE!</span>
        </div>
        <p className={styles.notification_message}>
          Hey, your <span className={styles.highlighted}>design draft</span> is waiting. Ready to polish it up?
        </p>
      </div>
    </div>
  )
}