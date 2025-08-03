import Link from "next/link";
import styles from "./menu.module.css";

export const Menu = () => {
  return (
    <ul className={styles.menu}>
      <li className={styles.menu_item}>
        <Link href="#" className={styles.item_link}>
          <span className={styles.icon_container}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`lucide lucide-bell-ring-icon lucide-bell-ring ${styles.icon}`}
            >
              <path d="M10.268 21a2 2 0 0 0 3.464 0"/>
              <path className={styles.right_bell} d="M22 8c0-2.3-.8-4.3-2-6"/>
              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>
              <path className={styles.left_bell} d="M4 2C2.8 3.7 2 5.7 2 8"/>
            </svg>
          </span>
          <span className={styles.item_label}>
            Notifications
          </span>
        </Link>
      </li>
      <li className={styles.menu_item}>
        <Link href="#" className={styles.item_link}>
          <span className={styles.icon_container}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`lucide lucide-folder-closed-icon lucide-folder-closed ${styles.folder_icon}`}
            >
              <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>
              <path d="M2 10h20"/>
            </svg>
          </span>
          <span className={styles.item_label}>
            Folders
          </span>
        </Link>
      </li>
      <li className={styles.menu_item}>
        <Link href="#" className={styles.item_link}>
          <span className={styles.icon_container}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`lucide lucide-thumbs-up-icon lucide-thumbs-up ${styles.icon_thumb} ${styles.icon_like}`}
            >
              <path d="M7 10v12"/>
              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/>
            </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`lucide lucide-heart-icon lucide-heart ${styles.icon_heart} ${styles.icon_like}`}
            >
              <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>
            </svg>
          </span>
          <span className={styles.item_label}>
            Like
          </span>
        </Link>
      </li>
    </ul>
  )
}