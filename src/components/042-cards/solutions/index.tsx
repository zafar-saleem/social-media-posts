import Image from "next/image";
import styles from "./solutions.module.css";
import Link from "next/link";

const DARK_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABGElEQVR4nN2UTW7CMBCFIxBcLzOUhBtwDbb89Bat6IWQGkrpjjexd1W6dzWRqFrFISRxF2BpJMuy3ht/M54ouuvlkt3YTmRmGFvDklnGl4bu9cySpHqnk7iJ8WAJR8viLgfeDWHSIms3NCSPzcLyN0g2buEGzZl3Eeef16yasXQWlzLy+EQ1aHZj5dnXwDI+vIXXbukvLudIPOzxEsrAkDz7DN6CGbBkVUSEIhgiQvGvBobxWUXEsg9Yg1ePAbYBu+jJg0jSgIim1Y82dyPLOAQo8LF2wupU7GuQUx57xX+h2vTIfnlRvES1cAPLWLc3wOqqcX1eOhWvqwkOjVhqXzPXwkuis0V7u/yMhEL35Rljqnc6id/M+gb+NBa7f/VrqwAAAABJRU5ErkJggg==";
const LIGHT_ICON = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABEUlEQVR4nN1UbWoCMRAVRa+ntFavpLW3qGwv40+h1szsHcT+yMwsjMwWLWVjN2TjDw08CCG8N/Pmo9d76KNbHVWO5oxcCPCOgb4N9R25qEqa2Z8kckH/LMgoyNoCEPBP8VGrDgToLYJY/wBopar99shTyPEMWsbYop3g/CRszVZHtZ9dBYDLYOGtWzqT4w+qkl4aAoz8kUuAgdcB/3mfS0CAd4EM6JgtA6TjrQUOgf7nr4wWfYaKXGQs8nuzTUuaZcsA/bQ5aBsdCrLLIIBXN6xtxc4Czo+D5L8itEoXoMW/5LVVqn1Bek0gX0at60smzk8ia+JabbmazUaHtrhst1hv2zDWA2l3e0M/tT9J5HdzTviQAclTUnJzAAAAAElFTkSuQmCC";
const ARROW_ICON = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tb3ZlLXJpZ2h0LWljb24gbHVjaWRlLW1vdmUtcmlnaHQiPjxwYXRoIGQ9Ik0xOCA4TDIyIDEyTDE4IDE2Ii8+PHBhdGggZD0iTTIgMTJIMjIiLz48L3N2Zz4=";

export const SolutionsCard = () => {
  return (
    <div className={styles.solutions}>
      <header className={styles.solutions_header}>
        <div className={styles.header_icon}>
          <Image
            width={20}
            height={20}
            alt=""
            src={LIGHT_ICON}
          />
          <Image
            width={20}
            height={20}
            alt=""
            src={LIGHT_ICON}
          />
          <Image
            width={20}
            height={20}
            alt=""
            src={DARK_ICON}
          />
        </div>
      </header>
      <main className={styles.solutions_contents}>
        <article className={styles.solutions_article}>
          <h2>Flexible Solutions</h2>
          <p className={styles.solutions_description}>
            Get advantage of our models to setup your cloud infrastructure
          </p>
        </article>
      </main>
      <footer className={styles.solutions_footer}>
        <Link href="#">
          <span>Read more</span>
          <Image
            src={ARROW_ICON}
            width={20}
            height={20}
            alt=""
          />
        </Link>
      </footer>
    </div>
  )
}
