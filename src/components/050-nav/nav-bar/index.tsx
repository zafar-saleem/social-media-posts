import Link from "next/link";
import styles from "./nav-bar.module.css";
import Image from "next/image";

const ICONS = {
  x: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABlklEQVR4nO2UPSiFYRiGj0PyM5EkRTEYJPnZbCg/pSwGUgYMFoOSRUrJ6GwGg0EpOQzKZkJJKImBTEJIyW/5i0tv3fR2+r7zfecc47mn89zv89z3ed73e55AIAm/AJqAb5yx7FHbCnyqvjNa4jTu6HKpqQaelTPi1UUGcKTkkLh+xQ9AcUR+IXCu81mPS/orqgHe1W6LuCWJbABBcVnArvh1IN2XgYpHVXgJ5AJ5wLW4IWMCrCg+BnJ8i8sgFdiSwIK4NsWvwKJ+3wKlMYlbJiXAo4S6xc1Yj26M6uISt0x6JXZvHhjIBk7FzSckbpmEJbipq6sFPoAvoP4/DPKAK5kMixtXfBHzAzsYZAMHEnwDKoE0YEfcXCLiQetzNNdicKiBLANexHXEaxCSwB1QBZwontL5gPURFMUq3m/98wZryn8fuFHcqvLWgBS/4s3ajgY9EWdjEVOeD9yIG/QjXq6WDSZc3sXspL81DrRbw1cRTbwAOFNy2K1lTfkTzth3XHxAJrCtpD2zLT067cMdk55XlURA+AFztNjG/xzYtwAAAABJRU5ErkJggg==",
  contact: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tYWlsLWljb24gbHVjaWRlLW1haWwiPjxwYXRoIGQ9Im0yMiA3LTguOTkxIDUuNzI3YTIgMiAwIDAgMS0yLjAwOSAwTDIgNyIvPjxyZWN0IHg9IjIiIHk9IjQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNiIgcng9IjIiLz48L3N2Zz4=",
  arrows: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1taW5pbWl6ZTItaWNvbiBsdWNpZGUtbWluaW1pemUtMiI+PHBhdGggZD0ibTE0IDEwIDctNyIvPjxwYXRoIGQ9Ik0yMCAxMGgtNlY0Ii8+PHBhdGggZD0ibTMgMjEgNy03Ii8+PHBhdGggZD0iTTQgMTRoNnY2Ii8+PC9zdmc+",
  user: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS11c2VyLXJvdW5kLWljb24gbHVjaWRlLXVzZXItcm91bmQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iOCIgcj0iNSIvPjxwYXRoIGQ9Ik0yMCAyMWE4IDggMCAwIDAtMTYgMCIvPjwvc3ZnPg==",
};

export const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <button className={`${styles.navbar_dp_container} ${styles.navbar_links}`}>
        <span className={styles.navbar_dp_media}>
          <Image
            src={ICONS.user}
            width={24}
            height={24}
            alt=""
          />
        </span>
        <span className={styles.navbar_dp_label}>Zafar Saleem</span>
      </button>
      <div className={`${styles.navbar_social} ${styles.navbar_links}`}>
        <Image
          src={ICONS.x}
          width={24}
          height={24}
          alt=""
          className={styles.navbar_link_icon}
        />
        <div className={styles.navbar_x_contents}>
          <div className={`${styles.navbar_flex} ${styles.flex_space}`}>
            <span className={styles.navbar_dp_container}>
              <Image
                src={ICONS.user}
                width={50}
                height={50}
                alt=""
              />
            </span>
            <span className={styles.navbar_grid_profession}>
              Motion Focused UI Genius
            </span>
            <Image
              src={ICONS.arrows}
              width={24}
              height={24}
              alt=""
            />
          </div>
          <div className={`${styles.navbar_flex} ${styles.flex_space}`}>
            <div className={styles.navbar_flex_item}>
              <Link href="">Zafar</Link>
              <span>@zsaleem</span>
            </div>
            <button className={styles.navbar_flex_btn}>Follow</button>
          </div>
          <article className={`${styles.navbar_flex} ${styles.flex_space}`}>
            <p className={`${styles.navbar_grid_content}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quam officia ducimus labore maiores, recusandae pariatur cumque laboriosam illo nisi.
            </p>
          </article>
        </div>
      </div>
      <button className={`${styles.navbar_contact} ${styles.navbar_links}`}>
        <Image
          src={ICONS.contact}
          width={24}
          height={24}
          alt=""
        />
      </button>
    </div>
  )
}