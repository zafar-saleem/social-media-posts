import Link from "next/link";
import styles from "../../styles.module.css";

type Props = {
  totalJoiners: number;
}

export const Header = ({ totalJoiners }: Props) => {
  return (
    <header className={styles.header}>
      <label className={styles.tab_label}>
        <input type="radio" className={styles.tab_participants} name="tab" defaultChecked />
        <span className={styles.tab_label}>Participante</span>
      </label>
      <label className={styles.tab_label}>
        <input type="radio" className={styles.tab_chat} name="tab" />
        <span className={styles.tab_label}>Live Chat</span>
      </label>
      <span className={styles.info_label}>{totalJoiners > 9 ? `9+` : `${totalJoiners}`} joined</span>
      <Link href="#" className={styles.see_all}>See All</Link>
    </header>
  )
}