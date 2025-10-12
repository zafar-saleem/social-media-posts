import { ButtonProps } from "../ButtonAdd";
import styles from "../../Widget.module.css";
import { setYAxis, scaleValues } from "../../utils";
import Link from "next/link";

type CardProps = ButtonProps & {
  name: string;
  role: string;
  icon: any;
  avatar: any;
  email: string;
}

export const Card = ({ index, ...rest }: CardProps) => {
  return (
    <div
      className={styles.card}
      style={{
        "--zIndex": index === 0 ? 100 : 100 - index,
        "--positionY": `${setYAxis(index)}rem`,
        "--scale": scaleValues[index],
      }}
    >
      {rest.avatar}
      <span className={styles.card_name}>{rest.name}</span>
      <span className={styles.card_role}>{rest.role}</span>
      <Link href={`mailto:${rest.email}`} className={styles.button_email}>
        {rest.icon}
      </Link>
      <span className={styles.tooltip}>Email {rest.name.split(" ")[0]}</span>
    </div>
  )
}