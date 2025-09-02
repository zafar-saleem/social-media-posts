import Image from "next/image";
import styles from "./wild.module.css";
import Icon from "./assets/hiking.gif";

export const WildCard = () => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_media_container}>
        <Image
          src={Icon}
          width={100}
          height={100}
          alt="hiking"
        />
      </div>
      <h1 className={styles.card_title}>
        Hike In Wild
        <span className={styles.card_title_icon}>
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM1ZDY3MmUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tb3ZlLXJpZ2h0LWljb24gbHVjaWRlLW1vdmUtcmlnaHQiPjxwYXRoIGQ9Ik0xOCA4TDIyIDEyTDE4IDE2Ii8+PHBhdGggZD0iTTIgMTJIMjIiLz48L3N2Zz4="
            width={24}
            height={24}
            alt=""
            className={`${styles.icon} ${styles.hover_icon}`}
          />
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tb3ZlLXJpZ2h0LWljb24gbHVjaWRlLW1vdmUtcmlnaHQiPjxwYXRoIGQ9Ik0xOCA4TDIyIDEyTDE4IDE2Ii8+PHBhdGggZD0iTTIgMTJIMjIiLz48L3N2Zz4="
            width={24}
            height={24}
            alt=""
            className={`${styles.icon} ${styles.normal_icon}`}
          />
          
        </span>
      </h1>
      <div className={`${styles.card_hike_info} ${styles.flex}`}>
        <span className={`${styles.flex} ${styles.info_container}`}>
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNkMmNlY2YiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jbG9jazgtaWNvbiBsdWNpZGUtY2xvY2stOCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz48cG9seWxpbmUgcG9pbnRzPSIxMiA2IDEyIDEyIDggMTQiLz48L3N2Zz4="
            width={15}
            height={15}
            alt=""
          />
          ~8 Hours
        </span>

        <span className={`${styles.flex} ${styles.info_container}`}>
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNkMmNlY2YiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1sYW5kLXBsb3QtaWNvbiBsdWNpZGUtbGFuZC1wbG90Ij48cGF0aCBkPSJtMTIgOCA2LTMtNi0zdjEwIi8+PHBhdGggZD0ibTggMTEuOTktNS41IDMuMTRhMSAxIDAgMCAwIDAgMS43NGw4LjUgNC44NmEyIDIgMCAwIDAgMiAwbDguNS00Ljg2YTEgMSAwIDAgMCAwLTEuNzRMMTYgMTIiLz48cGF0aCBkPSJtNi40OSAxMi44NSAxMS4wMiA2LjMiLz48cGF0aCBkPSJNMTcuNTEgMTIuODUgNi41IDE5LjE1Ii8+PC9zdmc+"
            width={15}
            height={15}
            alt=""
          />
          8km
        </span>

        <span className={`${styles.flex} ${styles.info_container}`}>
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNkMmNlY2YiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1hcnJvdy1yaWdodC10by1saW5lLWljb24gbHVjaWRlLWFycm93LXJpZ2h0LXRvLWxpbmUiPjxwYXRoIGQ9Ik0xNyAxMkgzIi8+PHBhdGggZD0ibTExIDE4IDYtNi02LTYiLz48cGF0aCBkPSJNMjEgNXYxNCIvPjwvc3ZnPg=="
            width={15}
            height={15}
            alt=""
          />
          Medium Level
        </span>
      </div>
      <p className={styles.text_contents}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto qui numquam, accusamus alias.
      </p>
      <div className={`${styles.card_photo} ${styles.card_photo_one}`} />
      <div className={`${styles.card_photo} ${styles.card_photo_two}`} />
      <div className={`${styles.card_photo} ${styles.card_photo_three}`} />
      <div className={`${styles.card_photo} ${styles.card_photo_four}`} />
    </div>
  )
}