import Image from "next/image";
import styles from "./styles.module.css";

export const CTAButton = () => {
  return (
    <button className={styles.btn}>
      <span className={styles.btn_initial_label}>Work together</span>
      <span className={styles.btn_label}>Pick your plan</span>
      <span className={styles.btn_icon_container}>
        <Image
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigyMjcgMjUyIDIzNikiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jYWxlbmRhci1kYXlzLWljb24gbHVjaWRlLWNhbGVuZGFyLWRheXMiPjxwYXRoIGQ9Ik04IDJ2NCIvPjxwYXRoIGQ9Ik0xNiAydjQiLz48cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjQiIHJ4PSIyIi8+PHBhdGggZD0iTTMgMTBoMTgiLz48cGF0aCBkPSJNOCAxNGguMDEiLz48cGF0aCBkPSJNMTIgMTRoLjAxIi8+PHBhdGggZD0iTTE2IDE0aC4wMSIvPjxwYXRoIGQ9Ik04IDE4aC4wMSIvPjxwYXRoIGQ9Ik0xMiAxOGguMDEiLz48cGF0aCBkPSJNMTYgMThoLjAxIi8+PC9zdmc+"
          width={24}
          height={24}
          alt=""
          className={styles.icon}
        />
      </span>
    </button>
  )
}