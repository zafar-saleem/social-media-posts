import Image from "next/image";
import styles from "./styles.module.css";
import list from "./assets/2.png";
import analytics from "./assets/4.png";
import lemlist from "./assets/1.png";
import snowball from "./assets/3.png";
import station from "./assets/5.png";
import taplio from "./assets/6.png";
import apps from "./assets/Apps.png";

export const TaskAutomationFeaturesSection = () => {
  return (
    <article className={styles.features}>
      <h1 className={styles.features_title}>Automate your marketing and track growth in one place.</h1>
      <p className={styles.features_copy}>Our features are built to save you time, cut out the busy work, and keep your tools working in <b>perfect sync</b>.</p>
      <div className={styles.feature_trust}>
        <Image
          src={apps}
          width={200}
          height={200}
          alt=""
        />
        <div>
          <b>150+</b> <span>Integrations available</span>
        </div>
      </div>
      <Image
        src={list}
        width={1000}
        height={1000}
        alt=""
        className={styles.feature_list}
      />
      <Image
        src={analytics}
        width={1000}
        height={1000}
        alt=""
        className={styles.feature_analytics}
      />
      <div className={styles.features_businesses}>
        <h4 className={styles.features_social}>Trusted by fast growing teams at</h4>
        <Image
          src={lemlist}
          width={2250}
          height={2250}
          alt=""
        />
        <Image
          src={snowball}
          width={250}
          height={250}
          alt=""
        />
        <Image
          src={station}
          width={250}
          height={250}
          alt=""
        />
        <Image
          src={taplio}
          width={250}
          height={250}
          alt=""
        />
      </div>
    </article>
  )
}