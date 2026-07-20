import React from "react";
import styles from "./switch.module.css";
import Image from "next/image";

export const Settings = () => {
  return (
    <div className={styles.settings_container}>
      <header>
        <h1 className={styles.title}>Settings</h1>
      </header>
      <ul className={styles.settings_item_container}>
        <li className={styles.settings_item}>
          <Image 
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNkYmRiZGIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tYWlsLWljb24gbHVjaWRlLW1haWwiPjxwYXRoIGQ9Im0yMiA3LTguOTkxIDUuNzI3YTIgMiAwIDAgMS0yLjAwOSAwTDIgNyIvPjxyZWN0IHg9IjIiIHk9IjQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNiIgcng9IjIiLz48L3N2Zz4="
            width={24}
            height={24}
            alt=""
          />
          <span>Email Notifications</span>
          <div className={styles.toggle_container}>
            <SwitchButton />
          </div>
        </li>
        <li className={styles.settings_item}>
          <Image 
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNkYmRiZGIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zbWFydHBob25lLW5mYy1pY29uIGx1Y2lkZS1zbWFydHBob25lLW5mYyI+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMTIiIHg9IjIiIHk9IjYiIHJ4PSIxIi8+PHBhdGggZD0iTTEzIDguMzJhNy40MyA3LjQzIDAgMCAxIDAgNy4zNiIvPjxwYXRoIGQ9Ik0xNi40NiA2LjIxYTExLjc2IDExLjc2IDAgMCAxIDAgMTEuNTgiLz48cGF0aCBkPSJNMTkuOTEgNC4xYTE1LjkxIDE1LjkxIDAgMCAxIC4wMSAxNS44Ii8+PC9zdmc+"
            width={24}
            height={24}
            alt=""
          />
          <span>SMS Notifications</span>
          <div className={styles.toggle_container}>
            <SwitchButton />
          </div>
        </li>
        <li className={styles.settings_item}>
          <Image 
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNkYmRiZGIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tZXNzYWdlLXNxdWFyZS1jb2RlLWljb24gbHVjaWRlLW1lc3NhZ2Utc3F1YXJlLWNvZGUiPjxwYXRoIGQ9Ik0xMCA3LjUgOCAxMGwyIDIuNSIvPjxwYXRoIGQ9Im0xNCA3LjUgMiAyLjUtMiAyLjUiLz48cGF0aCBkPSJNMjEgMTVhMiAyIDAgMCAxLTIgMkg3bC00IDRWNWEyIDIgMCAwIDEgMi0yaDE0YTIgMiAwIDAgMSAyIDJ6Ii8+PC9zdmc+"
            width={24}
            height={24}
            alt=""
          />
          <span>WhatsApp Notifications</span>
          <div className={styles.toggle_container}>
            <SwitchButton />
          </div>
        </li>
      </ul>
    </div>
  )
}

export const SwitchButton = () => {
  const id = React.useId();

  return (
    <div className={`${styles.switch_container} ${styles.relative}`}>
      <input
        id={id}
        type="checkbox"
        name=""
        value=""
        className={styles.switch}
      />
      <label htmlFor={id} className={styles.switch_label} />
    </div>
  )
}
