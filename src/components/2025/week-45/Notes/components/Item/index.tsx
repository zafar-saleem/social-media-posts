import Link from "next/link";
import styles from "../../Note.module.css";
import { ChipContainer } from "../Chip";
import { Icon } from "../Icon";
import { CollaboratorsList } from "../Collaborators";

export const Item = ({ item }) => {
  return (
    <li key={item.id} className={styles.list_item}>
      <Link href="#" className={styles.item_link}>
        <div>
          <span className={styles.item_title}>{item.title}</span>
          <ChipContainer item={item} />
          <Icon />
        </div>
        <p className={styles.item_text}>{item.text}</p>
      </Link>
      <CollaboratorsList item={item} />
    </li>
  )
}
