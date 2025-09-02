import Image from "next/image";
import styles from "./reaction.module.css";

const icons = {
  like: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzUzZjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10aHVtYnMtdXAtaWNvbiBsdWNpZGUtdGh1bWJzLXVwIj48cGF0aCBkPSJNNyAxMHYxMiIvPjxwYXRoIGQ9Ik0xNSA1Ljg4IDE0IDEwaDUuODNhMiAyIDAgMCAxIDEuOTIgMi41NmwtMi4zMyA4QTIgMiAwIDAgMSAxNy41IDIySDRhMiAyIDAgMCAxLTItMnYtOGEyIDIgMCAwIDEgMi0yaDIuNzZhMiAyIDAgMCAwIDEuNzktMS4xMUwxMiAyYTMuMTMgMy4xMyAwIDAgMSAzIDMuODhaIi8+PC9zdmc+",
  love: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmNTJlNWYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1oZWFydC1pY29uIGx1Y2lkZS1oZWFydCI+PHBhdGggZD0iTTE5IDE0YzEuNDktMS40NiAzLTMuMjEgMy01LjVBNS41IDUuNSAwIDAgMCAxNi41IDNjLTEuNzYgMC0zIC41LTQuNSAyLTEuNS0xLjUtMi43NC0yLTQuNS0yQTUuNSA1LjUgMCAwIDAgMiA4LjVjMCAyLjMgMS41IDQuMDUgMyA1LjVsNyA3WiIvPjwvc3ZnPg==",
  insight: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmOTllMWYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1saWdodGJ1bGItaWNvbiBsdWNpZGUtbGlnaHRidWxiIj48cGF0aCBkPSJNMTUgMTRjLjItMSAuNy0xLjcgMS41LTIuNSAxLS45IDEuNS0yLjIgMS41LTMuNUE2IDYgMCAwIDAgNiA4YzAgMSAuMiAyLjIgMS41IDMuNS43LjcgMS4zIDEuNSAxLjUgMi41Ii8+PHBhdGggZD0iTTkgMThoNiIvPjxwYXRoIGQ9Ik0xMCAyMmg0Ii8+PC9zdmc+",
  support: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMmEyMjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1oYW5kLWhlYXJ0LWljb24gbHVjaWRlLWhhbmQtaGVhcnQiPjxwYXRoIGQ9Ik0xMSAxNGgyYTIgMiAwIDEgMCAwLTRoLTNjLS42IDAtMS4xLjItMS40LjZMMyAxNiIvPjxwYXRoIGQ9Im03IDIwIDEuNi0xLjRjLjMtLjQuOC0uNiAxLjQtLjZoNGMxLjEgMCAyLjEtLjQgMi44LTEuMmw0LjYtNC40YTIgMiAwIDAgMC0yLjc1LTIuOTFsLTQuMiAzLjkiLz48cGF0aCBkPSJtMiAxNSA2IDYiLz48cGF0aCBkPSJNMTkuNSA4LjVjLjctLjcgMS41LTEuNiAxLjUtMi43QTIuNzMgMi43MyAwIDAgMCAxNiA0YTIuNzggMi43OCAwIDAgMC01IDEuOGMwIDEuMi44IDIgMS41IDIuOEwxNiAxMloiLz48L3N2Zz4=",
}

export const Reaction = () => {
  return (
    <div className={styles.container}>
      <button popoverTarget="reaction_popover" className={`${styles.btn_like}`}>
        <Image 
          src={icons.like}
          width={24}
          height={24}
          alt=""
        />
      </button>
      <div id="reaction_popover" popover="auto" className={styles.btn_container}>
        <button
          title="Like"
          className={`${styles.btn} ${styles.btn_like_icon}`}
        >
          <Image 
            src={icons.like}
            width={24}
            height={24}
            alt=""
          />
        </button>
        <button
          title="Awesome"
          className={`${styles.btn} ${styles.btn_love_icon}`}>
          <Image 
            src={icons.love}
            width={24}
            height={24}
            alt=""
          />
        </button>
        <button title="Insightful" className={`${styles.btn} ${styles.btn_insight_icon}`}>
          <Image 
            src={icons.insight}
            width={24}
            height={24}
            alt=""
          />
        </button>
        <button title="Support" className={`${styles.btn} ${styles.btn_support_icon}`}>
          <Image 
            src={icons.support}
            width={24}
            height={24}
            alt=""
          />
        </button>
      </div>
    </div>
  )
}