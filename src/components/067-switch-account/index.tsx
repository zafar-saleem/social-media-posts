import Link from "next/link";
import styles from "./switch.module.css";
import Image from "next/image";
import React from "react";

const ICONS = {
  arrows: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4MDgwODAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9ucy11cC1kb3duLWljb24gbHVjaWRlLWNoZXZyb25zLXVwLWRvd24iPjxwYXRoIGQ9Im03IDE1IDUgNSA1LTUiLz48cGF0aCBkPSJtNyA5IDUtNSA1IDUiLz48L3N2Zz4=",
  cross: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4MDgwODAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1wbHVzLWljb24gbHVjaWRlLXBsdXMiPjxwYXRoIGQ9Ik01IDEyaDE0Ii8+PHBhdGggZD0iTTEyIDV2MTQiLz48L3N2Zz4=",
  settings: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4MDgwODAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zZXR0aW5ncy1pY29uIGx1Y2lkZS1zZXR0aW5ncyI+PHBhdGggZD0iTTEyLjIyIDJoLS40NGEyIDIgMCAwIDAtMiAydi4xOGEyIDIgMCAwIDEtMSAxLjczbC0uNDMuMjVhMiAyIDAgMCAxLTIgMGwtLjE1LS4wOGEyIDIgMCAwIDAtMi43My43M2wtLjIyLjM4YTIgMiAwIDAgMCAuNzMgMi43M2wuMTUuMWEyIDIgMCAwIDEgMSAxLjcydi41MWEyIDIgMCAwIDEtMSAxLjc0bC0uMTUuMDlhMiAyIDAgMCAwLS43MyAyLjczbC4yMi4zOGEyIDIgMCAwIDAgMi43My43M2wuMTUtLjA4YTIgMiAwIDAgMSAyIDBsLjQzLjI1YTIgMiAwIDAgMSAxIDEuNzNWMjBhMiAyIDAgMCAwIDIgMmguNDRhMiAyIDAgMCAwIDItMnYtLjE4YTIgMiAwIDAgMSAxLTEuNzNsLjQzLS4yNWEyIDIgMCAwIDEgMiAwbC4xNS4wOGEyIDIgMCAwIDAgMi43My0uNzNsLjIyLS4zOWEyIDIgMCAwIDAtLjczLTIuNzNsLS4xNS0uMDhhMiAyIDAgMCAxLTEtMS43NHYtLjVhMiAyIDAgMCAxIDEtMS43NGwuMTUtLjA5YTIgMiAwIDAgMCAuNzMtMi43M2wtLjIyLS4zOGEyIDIgMCAwIDAtMi43My0uNzNsLS4xNS4wOGEyIDIgMCAwIDEtMiAwbC0uNDMtLjI1YTIgMiAwIDAgMS0xLTEuNzNWNGEyIDIgMCAwIDAtMi0yeiIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMiLz48L3N2Zz4=",
  logout: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4MDgwODAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1sb2ctb3V0LWljb24gbHVjaWRlLWxvZy1vdXQiPjxwYXRoIGQ9Im0xNiAxNyA1LTUtNS01Ii8+PHBhdGggZD0iTTIxIDEySDkiLz48cGF0aCBkPSJNOSAyMUg1YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDQiLz48L3N2Zz4=",
}

export const SwitchAccount = () => {
  const [toggleShow, setToggleShow] = React.useState(false);

  return (
    <div className={`${styles.switch_account_container} ${toggleShow ? styles.show : styles.hide}`}>
      <button className={styles.btn_switch} onClick={() => setToggleShow(!toggleShow)}>
        <span className={styles.btn_user_initials}>ZS</span>
        <span className={styles.btn_label}>Zafar Saleem</span>
        <div className={styles.btn_icon}>
          <Image
            src={ICONS.arrows}
            width={20}
            height={20}
            alt=""
          />
        </div>
      </button>
      <div className={`${styles.switch_account_contents} ${toggleShow ? styles.show : styles.hide}`}>
        <span className={styles.switch_account_title}>Switch Account</span>
        <Link href="#" className={styles.switch_account_holder}>
          <span className={styles.btn_user_initials}>ZS</span>
          <div className={styles.switch_account_user}>
            <span>Zafar</span>
            <span className={styles.switch_account_user_contact}>zafar@email.com</span>
          </div>
        </Link>

        <Link href="#" className={`${styles.switch_account_holder} ${styles.switch_account_selected}`}>
          <span className={`${styles.btn_user_initials} ${styles.switch_account_selected}`}>ZS</span>
          <div className={styles.switch_account_user}>
            <span>Zafar Saleem</span>
            <span className={styles.switch_account_user_contact}>zafar.sal@email.com</span>
          </div>
        </Link>

        <button className={styles.switch_account_add_btn}>
          <Image
            src={ICONS.cross}
            width={20}
            height={20}
            alt=""
          />
          <span className={styles.switch_account_btn_label}>Add account</span>
        </button>



        <div className={styles.actions_container}>
          <Link href="#" className={styles.actions_links_wrapper}>
            <Image
              src={ICONS.settings}
              width={15}
              height={15}
              alt=""
            />
            <span className={styles.actions_link_label}>Settings</span>
          </Link>

          <Link href="" className={styles.actions_links_wrapper}>
            <Image
              src={ICONS.logout}
              width={15}
              height={15}
              alt=""
            />
            <span className={styles.actions_link_label}>Log out</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
