import styles from "./styles.module.css";
import research_illustration from "./assets/7.png";
import uni_illustration from "./assets/8.png";
import marketing_illustration from "./assets/9.png";
import Image from "next/image";
import Link from "next/link";

export const BuiltFor = () => {
  return (
    <div className={styles.builtfor}>
      <div className={styles.group}>
        <h1 className={styles.buitlfor_title}>Built for researchers like you</h1>
        <p className={styles.micro_copy}>
          We support a wide range of researchers, each with distinct needs. Let us know who you represent so we can tailor out approach.
        </p>
      </div>
      <div className={`${styles.research} ${styles.box}`}>
        <span className={styles.box_title}>Research Agency</span>
        <p className={styles.box_copy}>Do you need to expand you sample or add more responses to an existing project?</p>
        <Image  
          src={research_illustration}
          width={500}
          height={500}
          alt=""
        />
        <Link className={styles.box_action} href={`#`}>Learn More</Link>
      </div>
      <div className={`${styles.uni} ${styles.box}`}>
        <span className={styles.box_title}>University</span>
        <p className={styles.box_copy}>Are you looking for a reliable partner to provide participants for your study?</p>
        <Image  
          src={uni_illustration}
          width={500}
          height={500}
          alt=""
        />
        <Link className={`${styles.action_fill} ${styles.box_action}`} href={`#`}>Learn More</Link>
      </div>
      <div className={`${styles.marketing} ${styles.box}`}>
        <span className={styles.box_title}>Marketing Agency</span>
        <p className={styles.box_copy}>Gather insights from your target audience to make better business decisions.</p>
        <Image  
          src={marketing_illustration}
          width={500}
          height={500}
          alt=""
        />
        <Link className={styles.box_action} href={`#`}>Learn More</Link>
      </div>
    </div>
  )
}
