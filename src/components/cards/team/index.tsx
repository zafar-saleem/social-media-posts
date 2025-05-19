import React from "react";
import styles from "./team.module.css";
import Image from "next/image";
import icon from "./assets/arrow.png";

export const Card = () => {
  const [isExpand, setIsExpand] = React.useState(false);

  return (
    <div className={styles.card_container}>
      <div className={`${styles.card_profile} ${isExpand ? styles.slide_up : styles.slide_down}`}>
        <div className={`${styles.card_profile_personal} ${styles.flex} ${styles.flex_row} ${styles.flex_gap_1}`}>
          <section className={styles.card_dp} />
          <div className={styles.card_profile_details}>
            <h1 className={styles.title}>Jezzica Rob</h1>
            <span className={styles.subtitle}>Product Manager</span>
          </div>
          <button
            className={`
              ${styles.card_button}
              ${isExpand ? styles.scaleup_button : styles.scaledown_button}
              
            `}
            onClick={() => setIsExpand(!isExpand)}
          >
            <span
              className={`
                ${styles.card_button_label}
                ${isExpand ? styles.fade_out : styles.fade_in}
              `}>
                + View Details
            </span>
            <p
              className={`
                ${styles.card_button_contact}
                ${isExpand ? styles.fade_in : styles.fade_out}
              `}>
              <span>Contact Jezz</span>
              <Image src={icon} width={25} height={25} alt="" className={styles.button_icon} />
              {/* <span className={styles.button_icon} /> */}
            </p>
          </button>
        </div>
        <div className={`${styles.drawer_container} ${isExpand ? styles.show : styles.hide}`}>
          <div className={`${styles.card_info} ${styles.flex} ${styles.flex_gap_1}`}>
            <span>Experience</span>
            <span className={`${styles.flex_right} ${styles.flex_basis}`}>5 Years</span>
          </div>
          <div className={`${styles.card_info} ${styles.flex} ${styles.flex_gap_1}`}>
            <span>Email</span>
            <span className={`${styles.flex_right} ${styles.flex_basis}`}>jezz@email.com</span>
          </div>
          <div className={`${styles.card_info} ${styles.flex} ${styles.flex_gap_1}`}>
            <span>Social</span>
            <span className={`${styles.flex_right} ${styles.flex_basis}`}>
              <span className={`${styles.social_icon_container}`}>
                <Image 
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACy0lEQVR4nO2ZW4hOURTHtzEz7nceXJN4MSkhGiUppYzGA5LUvDAvImWUyAsvJIWUS9Q8eRKmyISI8iAhZJKSXAe5jGuu46fd7C+r6es76/vOPufb6fyfvs63z1rrd/Y6e++1jjGZMmXK9F8I6AG0Eq0/wMIE/K8SPq4AveIYGw28V8C8AIZ6hFgA/HK27wNDfBhtQKdjniBqgA/O5htgog+7OePHlTDLY/oZCTxxtr4Btd4gnIPhwEsFSAcwpkQf/YFb4r1b4RVCOKpXzso5u1AUabsn0CJsbEwEQjhsVsI0Fml3v7j3SHIE/xwOBB4rQL5oX1Jgg7ivFahMHMQ5ngN0KmCu2pSJsLUI+O3G3wMGpQIhAtirTLGmAjamu5nL7UNjU4VwQfR2TzBK34Epee4fD7xyYz4DU1OHyAmYBvxUwNgltbrbe3bX/WfTqt6UW8A2ZYptd+OrgAvi+loTgoBK4LoCxJ6bZgGHxLXdJiQBk91xIkqfxO+TQIUJTUATet0A+pkQBVQAl5UgS03IomtJ/agAee6lvkhSwGrlrDSb0AWcVsIsMSELGAX8UIC8BkaYUAXsRK8WE6KARhHkVyVMgwlJwDyRUg9tPQI8VYDYRsM4E9Du3uECewtMctfnu/o7SheLLY+9K0/nY3a3/w8oU2xdOSH6ANdcIPbJr8wzpi/wQAFiH0JNuY4lp0QgmwqMrRUlbdQ5rCptkH0igKOK8TuUKbY1HYKuoNYLx5dkBVjgnmrgtrJ2mZEGRJ1IkzZgcJF9XU3t0mb7AknX6bnOR3sp6z+wWZliu5KCsJ8Ynolde2aMRcJ+74hSJzDXN4TtfNwRDhbHtDfBtYGi9AgY4AvCdj7O+964gDXKFDtsPDk8KIzu8fxp76wSpi6usy3C2JmoXm6Jtcs7BUg7MKxUJ8tEs/pmUp0Pe6xRzsqJJPxnypQpkymL/gKmQcJ3oyGk5gAAAABJRU5ErkJggg=="
                  width={15}
                  height={15}
                  alt=""
                  className={styles.icon}
                />
                <span>Twitter</span>
              </span>
              <span className={styles.social_icon_container}>
                <Image 
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsUlEQVR4nO2Zz04UQRCH54Be3ADe8WCE1cSLUfBgxIPgGfBVFH0BiHIUPfgnoO9ghMCyREx8BEXu60nFCAa9LB+pWBMnm0zPTPdAzSb7SybZw1R1f9vV1TVdUdRTT/YCLgIPgQ1gG/hNeRJf4rMBPJCxjgNgFGhy8voI3CgD4BTwDDjETofAU6DPF+IssEl11JQ5+ayERShl6QNwugiIhFNVtVhkY1vuiSzJ3K7lAaliSHWqkeecsNQ7YEiflYx3R1wgcthZaigxl3MZ7866QORU7RaQdRfITgmT+QEsAVMaqmf0kd/TwDKwm2K7ogDyrGaM88UFshcAcADMAf3OjfhvnAFgXm18tecawFetZEoE7gCv5F/TYjAuCF8Ckx2pXmy9FJUM0opjG6gDWzls3sdZRzNUyxrkIF4J4JYj9tP20rjajgF/LEHmEitRBCIJM6w+HluByCQG1C5POKVpU30MFv0zygJZSmzsUE2or9cWIFNqI9kpVC/U14wFSF1tJMWGatun1otKAqmpzT7h2ldftW4H+aW++rs9tD5bhta02kjZEarn6uuuBciy2kwSrtvq6431gSi1k6+aiQPxpwWIaF7tzgPfAkuUhaLGZYJIoTeqtuM6sbz6DtxU2+vWRWNnGT+c83ZSbmouqI18DX7FQ1HJIDHMWMLPhJQdklb1nJHnk2SneGMnVsILIgsk5FNXQuORbNrUAf6PM6h74u9xferuEK5drWKlALykZUdNf89oii2UnXwuH6yvg4pozQUinaJu0T0XyAjdo3rWRpT+YNW17oRQkCtAm+qqnautoDDSs6uqnuSCUJC+iobYVqHWW6IZWqWmz0aew9a1MovGrbi2hJN3e7oD6DLw1gCiAVwNBkg5Z2Yl/entehkXD7HElxSZa8B9Z2utp56iE9MRhEQQu0zJ/tkAAAAASUVORK5CYII="
                  width={15}
                  height={15}
                  alt=""
                  className={styles.icon}
                />
                Instagram
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}