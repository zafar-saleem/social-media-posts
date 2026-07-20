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
          Unlock precision data, scalable panels, and workflow automation - tailored to your role.
        </p>
      </div>
      <div className={`${styles.research} ${styles.box}`}>
        <span className={styles.box_title}>Research Agency</span>
        <p className={styles.box_copy}>Scale panel reach and speed data collection</p>
        <ul className={styles.box_list}>
          <li>Access 150M+ validated panel respondants</li>
          <li>Real-time survey health monitoring</li>
          <li>Multi-market targeting (e.g. Portugal, age 60+)</li>
        </ul>
        <Image  
          src={research_illustration}
          width={500}
          height={500}
          alt=""
        />
        <p className={styles.social_proof}><mark>*</mark> 2X faster project delivery for 50+ global agencies</p>
        <Link className={styles.box_action} href={`#`}>Explore Panel Services</Link>
      </div>
      <div className={`${styles.uni} ${styles.box}`}>
        <span className={styles.box_title}>University</span>
        <p className={styles.box_copy}>Validated data & participants for rigorous studies</p>
        <ul className={styles.box_list}>
          <li>Recruit specific, hard-to-reach academic samples</li>
          <li>Guaranteed 99.9% data accuracy with QC</li>
          <li>IRB-compliant data handling & privacy</li>
        </ul>
        <Image  
          src={uni_illustration}
          width={500}
          height={500}
          alt=""
        />
        <p className={styles.social_proof}>"The validity and scale we achieved changed our research outcomes." - Dr. Chen, Stanford</p>
        <Link className={`${styles.action_fill} ${styles.box_action}`} href={`#`}>Request Academic Trial</Link>
      </div>
      <div className={`${styles.marketing} ${styles.box}`}>
        <span className={styles.box_title}>Marketing Agency</span>
        <p className={styles.box_copy}>Validate concepts and measure brand lift faster</p>
        <ul className={styles.box_list}>
          <li>Innstant A/B testing on marketing assets</li>
          <li>Competive benchmarking dashboards</li>
          <li>Shareable insight reports for clients</li>
        </ul>
        <Image  
          src={marketing_illustration}
          width={500}
          height={500}
          alt=""
        />
        <p className={styles.social_proof}><mark>*</mark> Increased campaign ROI for 100+ agencies</p>
        <Link className={styles.box_action} href={`#`}>See Marketing Features</Link>
      </div>
    </div>
  )
}
