import Link from "next/link";
import styles from "./styles.module.css";

const DATA = [
  {
    initials: "T",
    name: "Thomas",
  },
  {
    initials: "H",
    name: "Hendrics",
  },
  {
    initials: "A",
    name: "Amaya",
  },
  {
    initials: "N",
    name: "Nick",
  }
]

export const AvatarsWithTooltips = () => {
  return (
    <div className={styles.avatars}>
      {
        DATA.map((item, index) => (
          <Link
            key={index}
            href={`#${item.name}`}
            className={styles.avatar}
          >
            {item.initials}
          </Link>
        ))
      }
      <div className={styles.tooltip}>
        {
          DATA.map((item, index) => (
            <span className={styles.tooltip_label} key={index} id={item.name}>{item.name}</span>
          ))
        }
      </div>
    </div>
  )
}