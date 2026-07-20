import Image from "next/image";
import styles from "./notifications.module.css";
import Link from "next/link";

export const Notifications = () => {
  return (
    <div className={styles.notification_container}>
      <div className={styles.container_header}>
        <span className={styles.notification_title}>Notifications</span>
        <button className={styles.settings_icon}>
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNhM2EzYTMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zZXR0aW5ncy1pY29uIGx1Y2lkZS1zZXR0aW5ncyI+PHBhdGggZD0iTTEyLjIyIDJoLS40NGEyIDIgMCAwIDAtMiAydi4xOGEyIDIgMCAwIDEtMSAxLjczbC0uNDMuMjVhMiAyIDAgMCAxLTIgMGwtLjE1LS4wOGEyIDIgMCAwIDAtMi43My43M2wtLjIyLjM4YTIgMiAwIDAgMCAuNzMgMi43M2wuMTUuMWEyIDIgMCAwIDEgMSAxLjcydi41MWEyIDIgMCAwIDEtMSAxLjc0bC0uMTUuMDlhMiAyIDAgMCAwLS43MyAyLjczbC4yMi4zOGEyIDIgMCAwIDAgMi43My43M2wuMTUtLjA4YTIgMiAwIDAgMSAyIDBsLjQzLjI1YTIgMiAwIDAgMSAxIDEuNzNWMjBhMiAyIDAgMCAwIDIgMmguNDRhMiAyIDAgMCAwIDItMnYtLjE4YTIgMiAwIDAgMSAxLTEuNzNsLjQzLS4yNWEyIDIgMCAwIDEgMiAwbC4xNS4wOGEyIDIgMCAwIDAgMi43My0uNzNsLjIyLS4zOWEyIDIgMCAwIDAtLjczLTIuNzNsLS4xNS0uMDhhMiAyIDAgMCAxLTEtMS43NHYtLjVhMiAyIDAgMCAxIDEtMS43NGwuMTUtLjA5YTIgMiAwIDAgMCAuNzMtMi43M2wtLjIyLS4zOGEyIDIgMCAwIDAtMi43My0uNzNsLS4xNS4wOGEyIDIgMCAwIDEtMiAwbC0uNDMtLjI1YTIgMiAwIDAgMS0xLTEuNzNWNGEyIDIgMCAwIDAtMi0yeiIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMiLz48L3N2Zz4="
            height={20}
            width={20}
            alt=""
          />
        </button>
      </div>
      <ul className={styles.notification_contents}>
        <li className={styles.notification_item_container}>
          <Image 
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMzZjY0ZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS11c2VyLWljb24gbHVjaWRlLXVzZXIiPjxwYXRoIGQ9Ik0xOSAyMXYtMmE0IDQgMCAwIDAtNC00SDlhNCA0IDAgMCAwLTQgNHYyIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSI3IiByPSI0Ii8+PC9zdmc+"
            width={20}
            height={20}
            alt=""
            className={styles.notification_item_icon}
          />
          <div className={styles.notification_item_box}>
            <span className={styles.notification_item_title}>New Lead Generation</span>
            <p className={styles.notification_item_description}>Lorem ipsum dolor sit, amet</p>
            <span className={styles.notification_item_timeago}>10 minutes ago</span>
          </div>
        </li>
        <li className={styles.notification_item_container}>
          <Image 
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmNmM2NGYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1taWxlc3RvbmUtaWNvbiBsdWNpZGUtbWlsZXN0b25lIj48cGF0aCBkPSJNMTIgMTN2OCIvPjxwYXRoIGQ9Ik0xMiAzdjMiLz48cGF0aCBkPSJNNCA2YTEgMSAwIDAgMC0xIDF2NWExIDEgMCAwIDAgMSAxaDEzYTIgMiAwIDAgMCAxLjE1Mi0uMzY1bDMuNDI0LTIuMzE3YTEgMSAwIDAgMCAwLTEuNjM1bC0zLjQyNC0yLjMxOEEyIDIgMCAwIDAgMTcgNnoiLz48L3N2Zz4="
            width={20}
            height={20}
            alt=""
            className={styles.notification_item_icon}
          />
          <div className={styles.notification_item_box}>
            <span className={styles.notification_item_title}>Campaign Milestone</span>
            <p className={styles.notification_item_description}>Lorem ipsum dolor sit, amet consectetur</p>
            <span className={styles.notification_item_timeago}>3 days ago</span>
          </div>
        </li>
        <li className={styles.notification_item_container}>
          <Image 
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3YzUzZjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1ib3QtbWVzc2FnZS1zcXVhcmUtaWNvbiBsdWNpZGUtYm90LW1lc3NhZ2Utc3F1YXJlIj48cGF0aCBkPSJNMTIgNlYySDgiLz48cGF0aCBkPSJtOCAxOC00IDRWOGEyIDIgMCAwIDEgMi0yaDEyYTIgMiAwIDAgMSAyIDJ2OGEyIDIgMCAwIDEtMiAyWiIvPjxwYXRoIGQ9Ik0yIDEyaDIiLz48cGF0aCBkPSJNOSAxMXYyIi8+PHBhdGggZD0iTTE1IDExdjIiLz48cGF0aCBkPSJNMjAgMTJoMiIvPjwvc3ZnPg=="
            width={20}
            height={20}
            alt=""
            className={styles.notification_item_icon}
          />
          <div className={styles.notification_item_box}>
            <span className={styles.notification_item_title}>Live Chat Interaction</span>
            <p className={styles.notification_item_description}>Lorem ipsum dolor sit ipsum</p>
            <span className={styles.notification_item_timeago}>4 days ago</span>
          </div>
        </li>
      </ul>
      <div className={styles.notification_footer}>
        <button className={styles.btn_archive}>Archive All</button>
      </div>
    </div>
  )
}