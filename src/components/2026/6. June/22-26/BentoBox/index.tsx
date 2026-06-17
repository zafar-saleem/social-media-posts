import styles from "./styles.module.css";
import Growth from "./assets/1.png";
import Time from "./assets/2.png";
import Chart from "./assets/3.png";
import Progress from "./assets/4.png";
import Image from "next/image";

export const BentoBox = () => {
  return (
    <div className={styles.bento_box}>
      <h1 className={styles.box_title}>
        <span>Track Goals. Build habits.</span>
        <span>See real progress.</span>
      </h1>
      <p className={styles.box_copy}>Set personal health and fitness goals, track your progress, and build habits that help you stay connsistent for the long term.</p>
      <div className={styles.box}>
        <Image
          src={Growth}
          width="3000"
          height="3000"
          alt=""
          className={styles.box_growth}
        />
          <Image
            src={Time}
            width="3000"
            height="3000"
            alt=""
            className={styles.box_time}
          />
          <Image
            src={Chart}
            width="3000"
            height="3000"
            alt=""
            className={styles.box_chart}
          />
        <Image
          src={Progress}
          width="3000"
          height="3000"
          alt=""
          className={styles.box_progress}
        />
      </div>
    </div>
  )
}
