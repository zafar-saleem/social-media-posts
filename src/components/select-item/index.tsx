import styles from "./select-item.module.css";
import phone from "./assets/phone.png";
import glasses from "./assets/glasses.png";
import shirt from "./assets/shirt.png";
import bag from "./assets/bag.png";
import Image from "next/image";
import Link from "next/link";

const ICONS = {
  close: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYig0OSA0OSA0OSkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS14LWljb24gbHVjaWRlLXgiPjxwYXRoIGQ9Ik0xOCA2IDYgMTgiLz48cGF0aCBkPSJtNiA2IDEyIDEyIi8+PC9zdmc+",
  download: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYig0OSA0OSA0OSkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1kb3dubG9hZC1pY29uIGx1Y2lkZS1kb3dubG9hZCI+PHBhdGggZD0iTTEyIDE1VjMiLz48cGF0aCBkPSJNMjEgMTV2NGEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnYtNCIvPjxwYXRoIGQ9Im03IDEwIDUgNSA1LTUiLz48L3N2Zz4=",
  delete: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxODkgODMgOTIpIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgY2xhc3M9Imx1Y2lkZSBsdWNpZGUtdHJhc2gyLWljb24gbHVjaWRlLXRyYXNoLTIiPjxwYXRoIGQ9Ik0zIDZoMTgiLz48cGF0aCBkPSJNMTkgNnYxNGMwIDEtMSAyLTIgMkg3Yy0xIDAtMi0xLTItMlY2Ii8+PHBhdGggZD0iTTggNlY0YzAtMSAxLTIgMi0yaDRjMSAwIDIgMSAyIDJ2MiIvPjxsaW5lIHgxPSIxMCIgeDI9IjEwIiB5MT0iMTEiIHkyPSIxNyIvPjxsaW5lIHgxPSIxNCIgeDI9IjE0IiB5MT0iMTEiIHkyPSIxNyIvPjwvc3ZnPg==",
}

export const SelectItem = () => {
  return (
    <div className={styles.item_container}>
      <div className={styles.card}>
        <label className={styles.card_item}>
          <Image
            src={phone}
            width={90}
            height={75}
            alt=""
          />
          <input type="checkbox" name="item" className={styles.card_check_item} />
        </label>
      </div>
      <div className={styles.card}>
        <label className={styles.card_item}>
          <Image
            src={glasses}
            width={75}
            height={75}
            alt=""
          />
          <input type="checkbox" name="item" className={styles.card_check_item} />
        </label>
      </div>
      <div className={styles.card}>
        <label className={styles.card_item}>
          <Image
            src={bag}
            width={75}
            height={75}
            alt=""
          />
          <input type="checkbox" name="item" className={styles.card_check_item} />
        </label>
      </div>
      <div className={styles.card}>
        <label className={styles.card_item}>
          <Image
            src={shirt}
            width={75}
            height={75}
            alt=""
          />
          <input type="checkbox" name="item" className={styles.card_check_item} />
        </label>
      </div>
      <nav className={styles.actions_container}>
        <ul className={styles.actions_btns_container}>
          <li>
            <button className={styles.actions_btn_close}>
              <Image
                src={ICONS.close}
                width={20}
                height={20}
                alt=""
              />
            </button>
          </li>
          <li>
            <button className={styles.actions_btn_close}>
              <Image
                src={ICONS.download}
                width={20}
                height={20}
                alt=""
              />
            </button>
          </li>
          <li>
            <button className={styles.actions_btn_close}>
              <Image
                src={ICONS.delete}
                width={20}
                height={20}
                alt=""
              />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}