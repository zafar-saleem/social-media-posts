import Image from "next/image";
import styles from "./styles.module.css";

export const DeleteMessageBox = () => {
  return (
    <div className={styles.box}>
      <div className={styles.box_container}>
        <Image
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmMTA5MDkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1vY3RhZ29uLXgtaWNvbiBsdWNpZGUtb2N0YWdvbi14Ij48cGF0aCBkPSJtMTUgOS02IDYiLz48cGF0aCBkPSJNMi41ODYgMTYuNzI2QTIgMiAwIDAgMSAyIDE1LjMxMlY4LjY4OGEyIDIgMCAwIDEgLjU4Ni0xLjQxNGw0LjY4OC00LjY4OEEyIDIgMCAwIDEgOC42ODggMmg2LjYyNGEyIDIgMCAwIDEgMS40MTQuNTg2bDQuNjg4IDQuNjg4QTIgMiAwIDAgMSAyMiA4LjY4OHY2LjYyNGEyIDIgMCAwIDEtLjU4NiAxLjQxNGwtNC42ODggNC42ODhhMiAyIDAgMCAxLTEuNDE0LjU4Nkg4LjY4OGEyIDIgMCAwIDEtMS40MTQtLjU4NnoiLz48cGF0aCBkPSJtOSA5IDYgNiIvPjwvc3ZnPg=="
          width={24}
          height={24}
          alt="Warning Icon"
          className={styles.box_icon}
        />
        <p className={styles.box_contents}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum tempora repellat saepe dolorum, numquam aperiam inventore quam neque est.</p>
      </div>
      <button className={styles.box_delete}>Delete</button>
    </div>
  )
}