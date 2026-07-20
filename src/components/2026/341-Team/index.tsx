import styles from "./styles.module.css";
import Photo_One from "./assets/8.png";
import Photo_Two from "./assets/9.png";
import Photo_Three from "./assets/10.png";
import Image from "next/image";
import Link from "next/link";

export const Team = () => {
  return (
    <article className={styles.team}>
      <div>
        <h1 className={styles.team_title}>Our Team</h1>
        <p className={styles.team_copy}>We are driven by our love for design and technology.</p>
      </div>
      <figure className={styles.team_member}>
        <Image
          src={Photo_One}
          width={500}
          height={500}
          alt=""
          className={styles.member_photo}
        />
        <figcaption className={styles.member_details}>
          <div>
            <span className={styles.member_name}>Josh Becker</span>
            <span className={styles.member_profession}>Founder & CEO</span>
          </div>
          <Link href="#">
            <Image width="24" height="24" src="https://img.icons8.com/3d-fluency/94/linkedin--v2.png" alt="linkedin--v2"/>
          </Link>
        </figcaption>
      </figure>
      <figure className={styles.team_member}>
        <Image
          src={Photo_Two}
          width={500}
          height={500}
          alt=""
          className={styles.member_photo}
        />
        <figcaption className={styles.member_details}>
          <div>
          <span className={styles.member_name}>Miranda Kirr</span>
          <span className={styles.member_profession}>Marketing Director</span>
          </div>
          <Link href="#">
            <Image width="24" height="24" src="https://img.icons8.com/3d-fluency/94/linkedin--v2.png" alt="linkedin--v2"/>
          </Link>
        </figcaption>
      </figure>
      <figure className={styles.team_member}>
        <Image
          src={Photo_Three}
          width={500}
          height={500}
          alt=""
          className={styles.member_photo}
        />
        <figcaption className={styles.member_details}>
          <div>
          <span className={styles.member_name}>Mike Menesez</span>
          <span className={styles.member_profession}>CTO</span>
          </div>
          <Link href="#">
            <Image width="24" height="24" src="https://img.icons8.com/3d-fluency/94/linkedin--v2.png" alt="linkedin--v2"/>
          </Link>
        </figcaption>
      </figure>
    </article>
  )
}