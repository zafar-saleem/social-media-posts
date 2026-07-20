import Image from "next/image";
import styles from "./menu.module.css";
import Link from "next/link";

export const Menu = () => {
  return (
    <div className={styles.menu_container}>
      <button className={styles.menu_icon_button}>
        <Image
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyMDA3MDEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1sYXlvdXQtZ3JpZC1pY29uIGx1Y2lkZS1sYXlvdXQtZ3JpZCI+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iNyIgeD0iMyIgeT0iMyIgcng9IjEiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSI3IiB4PSIxNCIgeT0iMyIgcng9IjEiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSI3IiB4PSIxNCIgeT0iMTQiIHJ4PSIxIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iNyIgeD0iMyIgeT0iMTQiIHJ4PSIxIi8+PC9zdmc+"
          width={50}
          height={24}
          alt="asdsa"
          className={styles.menu_icon}
        />
      </button>
      <ul>
        <li>
          <Link href="#">ASD</Link>
        </li>
        <li>
          <Link href="#">ASD</Link>
        </li>
        <li>
          <Link href="#">ASD</Link>
        </li>
        <li>
          <Link href="#">ASD</Link>
        </li>
        <li>
          <Link href="#">ASD</Link>
        </li>
      </ul>
    </div>
  )
}