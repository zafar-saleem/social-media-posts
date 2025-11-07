import styles from "../../styles.module.css";
import { TTeam } from "../../type";
import { Dropdown } from "../Dropdown";
import { Team } from "../Team";

type Props = {
  setTeamName: (args: any) => void;
  team: TTeam[];
  teamName: string;
}

export const Contents = ({ setTeamName, team, teamName }: Props) => {
  return (
    <div className={styles.contents}>
      <Dropdown setTeamName={setTeamName} />

      <p className={styles.contents_text}>
        Choose how many users would you like to have in this team?
      </p>
      
      <Team team={team} teamName={teamName} />
    </div>
  )
}