import React from "react";
import styles from "../../styles.module.css";
import { TTeam } from "../../type";

type Props = {
  team: TTeam[];
  teamName: string;
}

export const Team = ({ team, teamName }: Props) => {
  return (
    <div className={styles.team_avatars}>
      {
        team.filter(team => team.team === teamName).length ?
        team.map((member, index) => (
          <React.Fragment key={index}>
            {
              member.team === teamName && <span className={styles.avatar}>{member.avatar}</span>
            }
          </React.Fragment>
        )) : 
        <div className={styles.empty_state}>
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="rgb(151 82 6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-user-round-icon lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
          <p>No team members in "{teamName}" team.</p>
        </div>
      }
    </div>
  )
}