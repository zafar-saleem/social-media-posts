"use client";

import Image from "next/image";
import styles from "./dropdown.module.css";
import Link from "next/link";
import React from "react";
import Me from "./assets/avatar.png";

const ICONS = {
  user: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNDUgMTQ1IDE0NSkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS11c2VyLWljb24gbHVjaWRlLXVzZXIiPjxwYXRoIGQ9Ik0xOSAyMXYtMmE0IDQgMCAwIDAtNC00SDlhNCA0IDAgMCAwLTQgNHYyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI3IiByPSI0Ii8+PC9zdmc+",
  settings: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNDUgMTQ1IDE0NSkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zZXR0aW5ncy1pY29uIGx1Y2lkZS1zZXR0aW5ncyI+PHBhdGggZD0iTTEyLjIyIDJoLS40NGEyIDIgMCAwIDAtMiAydi4xOGEyIDIgMCAwIDEtMSAxLjczbC0uNDMuMjVhMiAyIDAgMCAxLTIgMGwtLjE1LS4wOGEyIDIgMCAwIDAtMi43My43M2wtLjIyLjM4YTIgMiAwIDAgMCAuNzMgMi43M2wuMTUuMWEyIDIgMCAwIDEgMSAxLjcydi41MWEyIDIgMCAwIDEtMSAxLjc0bC0uMTUuMDlhMiAyIDAgMCAwLS43MyAyLjczbC4yMi4zOGEyIDIgMCAwIDAgMi43My43M2wuMTUtLjA4YTIgMiAwIDAgMSAyIDBsLjQzLjI1YTIgMiAwIDAgMSAxIDEuNzNWMjBhMiAyIDAgMCAwIDIgMmguNDRhMiAyIDAgMCAwIDItMnYtLjE4YTIgMiAwIDAgMSAxLTEuNzNsLjQzLS4yNWEyIDIgMCAwIDEgMiAwbC4xNS4wOGEyIDIgMCAwIDAgMi43My0uNzNsLjIyLS4zOWEyIDIgMCAwIDAtLjczLTIuNzNsLS4xNS0uMDhhMiAyIDAgMCAxLTEtMS43NHYtLjVhMiAyIDAgMCAxIDEtMS43NGwuMTUtLjA5YTIgMiAwIDAgMCAuNzMtMi43M2wtLjIyLS4zOGEyIDIgMCAwIDAtMi43My0uNzNsLS4xNS4wOGEyIDIgMCAwIDEtMiAwbC0uNDMtLjI1YTIgMiAwIDAgMS0xLTEuNzNWNGEyIDIgMCAwIDAtMi0yeiIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMiLz48L3N2Zz4=",
  security: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNDUgMTQ1IDE0NSkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1sb2NrLWljb24gbHVjaWRlLWxvY2siPjxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxMSIgeD0iMyIgeT0iMTEiIHJ4PSIyIiByeT0iMiIvPjxwYXRoIGQ9Ik03IDExVjdhNSA1IDAgMCAxIDEwIDB2NCIvPjwvc3ZnPg==",
  history: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNDUgMTQ1IDE0NSkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1oaXN0b3J5LWljb24gbHVjaWRlLWhpc3RvcnkiPjxwYXRoIGQ9Ik0zIDEyYTkgOSAwIDEgMCA5LTkgOS43NSA5Ljc1IDAgMCAwLTYuNzQgMi43NEwzIDgiLz48cGF0aCBkPSJNMyAzdjVoNSIvPjxwYXRoIGQ9Ik0xMiA3djVsNCAyIi8+PC9zdmc+",
  connected: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNDUgMTQ1IDE0NSkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tb25pdG9yLXNtYXJ0cGhvbmUtaWNvbiBsdWNpZGUtbW9uaXRvci1zbWFydHBob25lIj48cGF0aCBkPSJNMTggOFY2YTIgMiAwIDAgMC0yLTJINGEyIDIgMCAwIDAtMiAydjdhMiAyIDAgMCAwIDIgMmg4Ii8+PHBhdGggZD0iTTEwIDE5di0zLjk2IDMuMTUiLz48cGF0aCBkPSJNNyAxOWg1Ii8+PHJlY3Qgd2lkdGg9IjYiIGhlaWdodD0iMTAiIHg9IjE2IiB5PSIxMiIgcng9IjIiLz48L3N2Zz4=",
  privacy: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNDUgMTQ1IDE0NSkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1lYXJ0aC1sb2NrLWljb24gbHVjaWRlLWVhcnRoLWxvY2siPjxwYXRoIGQ9Ik03IDMuMzRWNWEzIDMgMCAwIDAgMyAzIi8+PHBhdGggZD0iTTExIDIxLjk1VjE4YTIgMiAwIDAgMC0yLTIgMiAyIDAgMCAxLTItMnYtMWEyIDIgMCAwIDAtMi0ySDIuMDUiLz48cGF0aCBkPSJNMjEuNTQgMTVIMTdhMiAyIDAgMCAwLTIgMnY0LjU0Ii8+PHBhdGggZD0iTTEyIDJhMTAgMTAgMCAxIDAgOS41NCAxMyIvPjxwYXRoIGQ9Ik0yMCA2VjRhMiAyIDAgMSAwLTQgMHYyIi8+PHJlY3Qgd2lkdGg9IjgiIGhlaWdodD0iNSIgeD0iMTQiIHk9IjYiIHJ4PSIxIi8+PC9zdmc+",
  logout: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNDUgMTQ1IDE0NSkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1sb2ctb3V0LWljb24gbHVjaWRlLWxvZy1vdXQiPjxwYXRoIGQ9Im0xNiAxNyA1LTUtNS01Ii8+PHBhdGggZD0iTTIxIDEySDkiLz48cGF0aCBkPSJNOSAyMUg1YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDQiLz48L3N2Zz4=",
  arrow: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9InJnYigxNDUgMTQ1IDE0NSkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLXVwLWljb24gbHVjaWRlLWNoZXZyb24tdXAiPjxwYXRoIGQ9Im0xOCAxNS02LTYtNiA2Ii8+PC9zdmc+",
};

export const Profile = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className={styles.dropdown_container}>
      <button popoverTarget="menu_item" className={styles.dropdown_button_menu} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className={styles.dropdown_dp_container}>
          <Image
            src={Me}
            width={24}
            height={24}
            alt=""
          />
        </span>
        <span className={styles.dropdown_user}>
          <span className={styles.dropdown_username}>Zafar Saleem</span>
          <span className={styles.dropdown_role}>Super Admin</span>
        </span>
        <span className={styles.menu_icon_container}>
          <Image
            src={ICONS.arrow}
            width={15}
            height={15}
            alt=""
            className={`${styles.menu_icon} ${isMenuOpen ? styles.menu_open : styles.menu_close}`}
          />
        </span>
      </button>
      <ul id="menu_item" popover="auto" className={styles.dropdown_menu_items}>
        <li>
          <div className={`${styles.dropdown_list_item} ${styles.separator}`}>
            <span className={styles.dropdown_item_label}>Appear Offline</span>
            <span className={styles.dropdown_button_toggle_container}>
              <input type="checkbox" name="toggle_online_status" className={styles.toggle_online_status} />
            </span>
          </div>
        </li>
        <li className={`${styles.dropdown_list_item_container}`}>
          <span className={styles.dropdown_item_section_title}>Account</span>
          <Link href="#" className={`${styles.dropdown_list_item}`}>
            <Image
              src={ICONS.user}
              width={15}
              height={15}
              alt=""
              className={styles.icon}
            />
            <span>Profile info</span>
          </Link>

          <Link href="#" className={`${styles.dropdown_list_item} ${styles.separator}`}>
            <Image
              src={ICONS.settings}
              width={15}
              height={15}
              alt=""
              className={styles.icon}
            />
            <span>Account settings</span>
          </Link>
        </li>


        <li className={`${styles.dropdown_list_item_container}`}>
          <span className={styles.dropdown_item_section_title}>Security & Privacy</span>
          <Link href="#" className={`${styles.dropdown_list_item}`}>
            <Image
              src={ICONS.security}
              width={15}
              height={15}
              alt=""
              className={styles.icon}
            />
            <span>Security settings</span>
          </Link>

          <Link href="#" className={`${styles.dropdown_list_item}`}>
            <Image
              src={ICONS.history}
              width={15}
              height={15}
              alt=""
              className={styles.icon}
            />
            <span>Activity history</span>
          </Link>

          <Link href="#" className={`${styles.dropdown_list_item}`}>
            <Image
              src={ICONS.connected}
              width={15}
              height={15}
              alt=""
              className={styles.icon}
            />
            <span>Connected devices</span>
          </Link>

          <Link href="#" className={`${styles.dropdown_list_item} ${styles.separator}`}>
            <Image
              src={ICONS.privacy}
              width={15}
              height={15}
              alt=""
              className={styles.icon}
            />
            <span>Privacy control</span>
          </Link>
        </li>


        <li className={`${styles.dropdown_list_item_container}`}>
          <Link href="#" className={`${styles.dropdown_list_item} ${styles.logout_container}`}>
            <span>Logout</span>
            <span className={styles.icon_logout_container}>
              <Image
                src={ICONS.logout}
                width={15}
                height={15}
                alt=""
                className={styles.icon}
              />
            </span>
          </Link>
        </li>
      </ul>
    </div>
  )
}