import Link from "next/link";
import styles from "../../MegaMenu.module.css";
import { TypeChildren } from "../../types";
import Image from "next/image";

export const DropdownMenu = ({ ...props }) => {
  return (
    <ul className={styles.item_submenu}>
      {
        props.children.map((item: TypeChildren, index: number) => (
          <li key={index}>
            <Link href="#">
              <Image src={item.icon} width={12} height={12} alt="" className={styles.icon} />
              <div>
                <span className={styles.label}>{item.label}</span>
                <p className={styles.summary}>{item.summary}</p>
              </div>
            </Link>
          </li>
        ))
      }
    </ul>
  )
}
