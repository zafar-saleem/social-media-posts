import Image from "next/image";
import styles from "./fitness.module.css";
import fitnessOne from "./assets/fitness-1.jpeg";
import fitnessSecond from "./assets/fitness-2.jpeg";
import fitnessThird from "./assets/fitness-3.jpeg";
import Link from "next/link";

export const Fitness = () => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_media_container}>
        <Image
          src={fitnessOne}
          width={200}
          height={200}
          alt=""
          className={`${styles.fitness_media} ${styles.fitness_media_first}`}
        />
        <Image
          src={fitnessThird}
          width={200}
          height={200}
          alt=""
          className={`${styles.fitness_media} ${styles.fitness_media_third}`}
        />
        <Image
          src={fitnessSecond}
          width={200}
          height={200}
          alt=""
          className={`${styles.fitness_media} ${styles.fitness_media_second}`}
        />
      </div>
      <main className={styles.card_content_container}>
        <div className={styles.card_content}>
          <span className={styles.card_title}>Upper & Lower Body</span>
          <p className={styles.card_desc}>Build upper and lower body in a timeframe that no body will claim to make it happen</p>
        </div>
        <Link href="#">
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1oZWFydC1pY29uIGx1Y2lkZS1oZWFydCI+PHBhdGggZD0iTTE5IDE0YzEuNDktMS40NiAzLTMuMjEgMy01LjVBNS41IDUuNSAwIDAgMCAxNi41IDNjLTEuNzYgMC0zIC41LTQuNSAyLTEuNS0xLjUtMi43NC0yLTQuNS0yQTUuNSA1LjUgMCAwIDAgMiA4LjVjMCAyLjMgMS41IDQuMDUgMyA1LjVsNyA3WiIvPjwvc3ZnPg=="
            width={15}
            height={15}
            alt=""
          />
        </Link>
      </main>
      <footer className={styles.card_footer}>
        <p className={styles.duration}>
          <span className={styles.text_value}>10 Min</span>
          <span className={styles.text_label}>Duration</span>
        </p>
        <p className={styles.position}>
          <span className={styles.text_value}>Muscle & Flexibility</span>
          <span className={styles.text_label}>Position Area</span>
        </p>
        <p className={styles.duration}>
          <span className={styles.text_value}>Balance</span>
          <span className={styles.text_label}>Mood After</span>
        </p>
        <p>
          <button>Begin Session</button>
        </p>
      </footer>
    </div>
  )
}