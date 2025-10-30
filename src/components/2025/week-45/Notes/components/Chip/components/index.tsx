import styles from "../../../Note.module.css";

export const Chip = ({ item, type }) => {
  return (
    <span
      className={`${styles.chip}`}
      style={{ "--bg": item.filter[type].bg, "--text": item.filter[type].text}}
    >
      {item.filter[type].label}
    </span>
  )
}
