import styles from "../../../Note.module.css";
import { TypeItem } from "../../../types";

export const Chip = ({ type, ...item }: any & TypeItem) => {
  return (
    <span
      className={`${styles.chip}`}
      style={{ "--bg": item.filter[type].bg, "--text": item.filter[type].text}}
    >
      {item.filter[type].label}
    </span>
  )
}
