import styles from "../../styles.module.css";
import { TTeam } from "../../type";
import { Badge } from "../Badge";

type Props = {
  team: TTeam[];
  teamName: string;
}

let counter = 5;

export const Header = ({ team, teamName }: Props) => {
  return (
    <div className={styles.header}>
      <span className={styles.header_title}>Team Management Card</span>
      <span className={styles.header_counter}>
        <span className={styles.icon}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(151 82 6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-user-round-icon lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
        </span>
        <Badge counter={ counter - team.filter(item => item.team === teamName).length } />
      </span>
    </div>
  )
}