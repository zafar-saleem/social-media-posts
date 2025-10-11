import Link from "next/link";
import styles from "./CaseStudies.module.css";
import Image from "next/image";

export const CaseStudies = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title_text}>We'are Not <span className={styles.title_icon}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(255 255 255)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-search-icon lucide-file-search"><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"/><path d="m9 18-1.5-1.5"/><circle cx="5" cy="14" r="3"/></svg></span> Afraid To</span> <span className={styles.title_highlight}>Show Our Work</span>
      </h1>
      <section className={styles.contents}>
        <div className={styles.card}>
          <div className={styles.media_container}>
            <Image
              src="https://cdn.dribbble.com/userupload/45265552/file/b98e97f28a3377e79f70674dd9161808.png"
              width={100}
              height={100}
              alt=""
              className={styles.image}
            />
            <Link href="#" className={styles.button_cta}>Read More</Link>
          </div>
          <div className={styles.info}>
            <div>
              <span className={styles.avatar}>GL</span>
              <div className={styles.user}>
                <span className={styles.name}>Grant Lee</span>
                <span className={styles.role}>Co-Founder, Gamma</span>
              </div>
            </div>
            <div className={styles.badges}>
              <span className={styles.badge}>7,232 Reactions</span>
              <span className={styles.badge}>723 Comments</span>
              <span className={styles.badge}>923 Shared</span>
            </div>
          </div>
        </div>
        
        
        
        
        <div className={styles.card}>
          <div className={styles.media_container}>
            <Image
              src="https://cdn.dribbble.com/userupload/45194552/file/4a5a64ad165e1a823046467b8c224ac8.png"
              width={100}
              height={100}
              alt=""
              className={styles.image}
            />
            <Link href="#" className={styles.button_cta}>Read More</Link>
          </div>
          <div className={styles.info}>
            <div>
              <span className={styles.avatar}>JW</span>
              <div className={styles.user}>
                <span className={styles.name}>Justin Welsh</span>
                <span className={styles.role}>Creator & Entrepreuneur</span>
              </div>
            </div>
            <div className={styles.badges}>
              <span className={styles.badge}>7,232 Reactions</span>
              <span className={styles.badge}>723 Comments</span>
              <span className={styles.badge}>923 Shared</span>
            </div>
          </div>
        </div>
        
        
        
        <div className={styles.card}>
          <div className={styles.media_container}>
            <Image
              src="https://cdn.dribbble.com/userupload/45262858/file/664ee53e8ca2c14d7d5d065724a41766.png"
              width={100}
              height={100}
              alt=""
              className={styles.image}
            />
            <Link href="#" className={styles.button_cta}>Read More</Link>
          </div>
          <div className={styles.info}>
            <div>
              <span className={styles.avatar}>RA</span>
              <div className={styles.user}>
                <span className={styles.name}>Russel Anderson</span>
                <span className={styles.role}>Co-Founder, ACS Creative</span>
              </div>
            </div>
            <div className={styles.badges}>
              <span className={styles.badge}>7,232 Reactions</span>
              <span className={styles.badge}>723 Comments</span>
              <span className={styles.badge}>923 Shared</span>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}