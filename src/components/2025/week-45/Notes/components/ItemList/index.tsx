import styles from "../../Note.module.css";
import { Item } from "../Item";

export const ItemListContainer = ({ notes }) => {
  return (
    <>{notes.default.map((item) => ( <Item item={item} key={item.id} />))}</>
  )
}
