import Image from "next/image";
import styles from "./card.module.css";
import regular from "./assets/regular.JPG";
import hover from "./assets/hover.JPG";

const ICONS = {
  badge: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10YWctaWNvbiBsdWNpZGUtdGFnIj48cGF0aCBkPSJNMTIuNTg2IDIuNTg2QTIgMiAwIDAgMCAxMS4xNzIgMkg0YTIgMiAwIDAgMC0yIDJ2Ny4xNzJhMiAyIDAgMCAwIC41ODYgMS40MTRsOC43MDQgOC43MDRhMi40MjYgMi40MjYgMCAwIDAgMy40MiAwbDYuNTgtNi41OGEyLjQyNiAyLjQyNiAwIDAgMCAwLTMuNDJ6Ii8+PGNpcmNsZSBjeD0iNy41IiBjeT0iNy41IiByPSIuNSIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9zdmc+",
  download: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmN2Y3ZjciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1oYXJkLWRyaXZlLWRvd25sb2FkLWljb24gbHVjaWRlLWhhcmQtZHJpdmUtZG93bmxvYWQiPjxwYXRoIGQ9Ik0xMiAydjgiLz48cGF0aCBkPSJtMTYgNi00IDQtNC00Ii8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjgiIHg9IjIiIHk9IjE0IiByeD0iMiIvPjxwYXRoIGQ9Ik02IDE4aC4wMSIvPjxwYXRoIGQ9Ik0xMCAxOGguMDEiLz48L3N2Zz4=",
  geo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmN2Y3ZjciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1ib3gtaWNvbiBsdWNpZGUtYm94Ij48cGF0aCBkPSJNMjEgOGEyIDIgMCAwIDAtMS0xLjczbC03LTRhMiAyIDAgMCAwLTIgMGwtNyA0QTIgMiAwIDAgMCAzIDh2OGEyIDIgMCAwIDAgMSAxLjczbDcgNGEyIDIgMCAwIDAgMiAwbDctNEEyIDIgMCAwIDAgMjEgMTZaIi8+PHBhdGggZD0ibTMuMyA3IDguNyA1IDguNy01Ii8+PHBhdGggZD0iTTEyIDIyVjEyIi8+PC9zdmc+",
  cart_white: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmN2Y3ZjciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zaG9wcGluZy1jYXJ0LWljb24gbHVjaWRlLXNob3BwaW5nLWNhcnQiPjxjaXJjbGUgY3g9IjgiIGN5PSIyMSIgcj0iMSIvPjxjaXJjbGUgY3g9IjE5IiBjeT0iMjEiIHI9IjEiLz48cGF0aCBkPSJNMi4wNSAyLjA1aDJsMi42NiAxMi40MmEyIDIgMCAwIDAgMiAxLjU4aDkuNzhhMiAyIDAgMCAwIDEuOTUtMS41N2wxLjY1LTcuNDNINS4xMiIvPjwvc3ZnPg==",
  cart_black: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zaG9wcGluZy1jYXJ0LWljb24gbHVjaWRlLXNob3BwaW5nLWNhcnQiPjxjaXJjbGUgY3g9IjgiIGN5PSIyMSIgcj0iMSIvPjxjaXJjbGUgY3g9IjE5IiBjeT0iMjEiIHI9IjEiLz48cGF0aCBkPSJNMi4wNSAyLjA1aDJsMi42NiAxMi40MmEyIDIgMCAwIDAgMiAxLjU4aDkuNzhhMiAyIDAgMCAwIDEuOTUtMS41N2wxLjY1LTcuNDNINS4xMiIvPjwvc3ZnPg==",
  lego: "data:image/png;base64,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",
};

export const LegoCard = () => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_details}>
        <span className={styles.card_item_price}>
          <Image
            src={ICONS.badge}
            width={15}
            height={15}
            alt=""
          />
          <span className={styles.card_item_label}>$429.99</span>
        </span>

        <span className={styles.card_item_download}>
          <Image
            src={ICONS.download}
            width={15}
            height={15}
            alt=""
          />
          <span className={styles.card_item_label}>18+</span>
        </span>

        <span className={styles.card_item_geo}>
          <Image
            src={ICONS.geo}
            width={15}
            height={15}
            alt=""
          />
          <span className={styles.card_item_label}>2359</span>
        </span>
      </div>
      
      
      <div className={styles.card_media_container}>
        <Image
          src={regular}
          width={400}
          height={400}
          alt=""
          className={`${styles.card_media_regular} ${styles.card_media}`}
        />
        <Image
          src={hover}
          width={400}
          height={400}
          alt=""
          className={`${styles.card_media_hover} ${styles.card_media}`}
        />
      </div>


      <div className={styles.card_item_container}>
        <span className={styles.card_item_title}>
          <span>Volvo</span>
          <Image
            src={ICONS.lego}
            width={25}
            height={25}
            alt=""
          />
        </span>
        <span className={styles.card_item_model}>EC500 Hybrid</span>
        <button className={styles.card_item_button_container}>
          <span className={styles.card_item_light_cart} />
          <span className={styles.card_item_dark_cart} />
          {/* <Image
            src={ICONS.cart_white}
            width={24}
            height={24}
            alt=""
          /> */}
          <span className={styles.card_button_label}>Add to bag</span>
        </button>
      </div>
    </div>
  )
}
