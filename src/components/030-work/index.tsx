import Image from "next/image";
import styles from "./styles.module.css";
import one from "./assets/beverage.avif";
import two from "./assets/beverage.avif";
import three from "./assets/beverage.avif";

const ICONS = {
  product_design: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNjcgMTY3IDE2NykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb21wb25lbnQtaWNvbiBsdWNpZGUtY29tcG9uZW50Ij48cGF0aCBkPSJNMTUuNTM2IDExLjI5M2ExIDEgMCAwIDAgMCAxLjQxNGwyLjM3NiAyLjM3N2ExIDEgMCAwIDAgMS40MTQgMGwyLjM3Ny0yLjM3N2ExIDEgMCAwIDAgMC0xLjQxNGwtMi4zNzctMi4zNzdhMSAxIDAgMCAwLTEuNDE0IDB6Ii8+PHBhdGggZD0iTTIuMjk3IDExLjI5M2ExIDEgMCAwIDAgMCAxLjQxNGwyLjM3NyAyLjM3N2ExIDEgMCAwIDAgMS40MTQgMGwyLjM3Ny0yLjM3N2ExIDEgMCAwIDAgMC0xLjQxNEw2LjA4OCA4LjkxNmExIDEgMCAwIDAtMS40MTQgMHoiLz48cGF0aCBkPSJNOC45MTYgMTcuOTEyYTEgMSAwIDAgMCAwIDEuNDE1bDIuMzc3IDIuMzc2YTEgMSAwIDAgMCAxLjQxNCAwbDIuMzc3LTIuMzc2YTEgMSAwIDAgMCAwLTEuNDE1bC0yLjM3Ny0yLjM3NmExIDEgMCAwIDAtMS40MTQgMHoiLz48cGF0aCBkPSJNOC45MTYgNC42NzRhMSAxIDAgMCAwIDAgMS40MTRsMi4zNzcgMi4zNzZhMSAxIDAgMCAwIDEuNDE0IDBsMi4zNzctMi4zNzZhMSAxIDAgMCAwIDAtMS40MTRsLTIuMzc3LTIuMzc3YTEgMSAwIDAgMC0xLjQxNCAweiIvPjwvc3ZnPg==",
  web_design: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNjcgMTY3IDE2NykiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1kcmliYmJsZS1pY29uIGx1Y2lkZS1kcmliYmJsZSI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48cGF0aCBkPSJNMTkuMTMgNS4wOUMxNS4yMiA5LjE0IDEwIDEwLjQ0IDIuMjUgMTAuOTQiLz48cGF0aCBkPSJNMjEuNzUgMTIuODRjLTYuNjItMS40MS0xMi4xNCAxLTE2LjM4IDYuMzIiLz48cGF0aCBkPSJNOC41NiAyLjc1YzQuMzcgNiA2IDkuNDIgOCAxNy43MiIvPjwvc3ZnPg==",
};

export const RecentWorkCard = () => {
  return (
    <div className={styles.work_card}>
      <div className={styles.header}>
        <span className={styles.badge_container}>
          <span className={styles.badge}>
            <Image
              src={ICONS.web_design}
              width={10}
              height={10}
              alt=""
              className={styles.badge_icon}
            />
            <span className={styles.badge_label}>Web Design</span>
          </span>

          <span className={styles.badge}>
            <Image
              src={ICONS.product_design}
              width={10}
              height={10}
              alt=""
              className={styles.badge_icon}
            />
            <span className={styles.badge_label}>Product Design</span>
          </span>
        </span>
      </div>
      <main className={styles.main_contents}>
        <span className={styles.title}>Recent Works</span>
        <p className={styles.description}>Collection from the summer of 2025</p>
        <div className={styles.images_container}>
          <figure>
            <Image
              src="https://images.pexels.com/photos/11035386/pexels-photo-11035386.jpeg"
              width={130}
              height={150}
              alt=""
            />
          </figure>
          <figure>
            <Image
              src="https://images.pexels.com/photos/16587314/pexels-photo-16587314.jpeg"
              width={130}
              height={150}
              alt=""
            />
          </figure>
          <figure>
            <Image
              src="https://images.pexels.com/photos/20870797/pexels-photo-20870797.jpeg"
              width={130}
              height={150}
              alt=""
            />
          </figure>
        </div>
      </main>
      <footer className={styles.footer}>
        <button>See All</button>
        <button>Book a Call</button>
      </footer>
    </div>
  )
}