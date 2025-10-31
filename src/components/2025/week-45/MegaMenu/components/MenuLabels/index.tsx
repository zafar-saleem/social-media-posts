import Link from "next/link";
import styles from "../../MegaMenu.module.css";
import { TypeMenuProps } from "../../types";
import { Icon } from "../Icon";
import { DropdownMenuLabels } from "../DropdownMenuLabels";

export const MenuLabels = ({ ...props }: TypeMenuProps[] & any) => {
  return (
    <ul className={styles.menu_list}>
      {
        props.default.map((item: TypeMenuProps, index: number) => (
          <li className={`${styles.menu_item}`} key={index}>
            <Link href="#" className={`${styles[item.class || ""]} ${styles.item_link}`}>
              <span>{item.label}</span>
              <Icon {...item} />
            </Link>
            <DropdownMenuLabels {...item} />
          </li>
        ))
      }
    </ul>
  )
}
