import styles from "../../MegaMenu.module.css";
import { TypeChildren, TypeSubMenuProps } from "../../types";
import { DropdownMenu } from "../DropdownMenu";

export const DropdownMenuLabels = ({ ...props }: TypeSubMenuProps[] & any) => {
  if (props?.children) {
    return (
      <section className={styles.product_submenu}>
        {
          props.children?.map((item: TypeChildren, index: number) => (
            <nav className={styles.item_menu} key={index}>
              <span className={styles.menu_title}>{item.label}</span>
              <DropdownMenu {...item} />
            </nav>
          ))
        }
      </section>
    )
  }
}
