import Image from "next/image";
import styles from "./nike.module.css";
import Link from "next/link";
import media from "./assets/nike.png";

export const NikeCard = () => {
  return (
    <div className={styles.nike_container}>
      <figure>
        <Image
          src={media}
          width={200}
          height={200}
          alt=""
          className={styles.nike_media}
        />
      </figure>
      <article className={styles.nike_contents}>
        <span className={styles.nike_title}>Nike Aplhafly 3 Premium</span>
        <p>Fine-tuned for marathon speed, the Alphafly 3 premium helps push you beyond what you thought possible.</p>
        <Link href="#" className={styles.nike_link}>
          <span>LEARN MORE</span>
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYig1NCA1NCA1NCkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1hcnJvdy1yaWdodC1pY29uIGx1Y2lkZS1hcnJvdy1yaWdodCI+PHBhdGggZD0iTTUgMTJoMTQiLz48cGF0aCBkPSJtMTIgNSA3IDctNyA3Ii8+PC9zdmc+"
            width={15}
            height={15}
            alt=""
          />
        </Link>
      </article>
    </div>
  )
}
