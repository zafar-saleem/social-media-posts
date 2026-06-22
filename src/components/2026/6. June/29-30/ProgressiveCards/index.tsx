import { CSSProperties } from "react";
import styles from "./styles.module.css";
import {CARDS} from "./data";

export const ProgressCardsStack = () => {
  return (
    <div className={styles.cards_stack}>
      {
        CARDS.map(item => (
          <Card key={item.id} {...item} />
        ))
      }
    </div>
  )
}

const Card = ({ ...props }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon} style={{ "--bg-color": props.color } as CSSProperties}>{props.icon}</div>
      <div className={styles.group}>
        <span className={styles.title}>{props.title}</span>
        <span className={styles.total}>{props.done}/{props.total}</span>
        <ProgressBar {...props} />
      </div>
    </div>
  )
}

const ProgressBar = ({ ...props }) => {
  return (
    <div
      className={styles.progress}
      style={{
        "--progress": `${props.done / props.total * 100}%`,
        "--color": props.color,
        "--tracker-opacity": 0.5,
        "--bar-opacity": props.opacity,
      } as CSSProperties}
    />
  )
}