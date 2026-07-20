import React from "react";
import styles from "../../styles.module.css";
import { TTeam } from "../../type";

type Props = {
  setTeam: (arg: any) => void;
  isTeamMemberPopup: boolean;
  setIsTeamMemberPopup: (arg: boolean) => void;
  teamName: string;
  team: TTeam[];
};

export const Popup = ({
  team,
  setTeam,
  isTeamMemberPopup,
  setIsTeamMemberPopup,
  teamName,
}: Props) => {
  return (
    <ul className={`${styles.popup} ${isTeamMemberPopup ? styles.show : styles.hide}`}>
      {
        team.map((member, index) => (
          <React.Fragment key={index}>
            {
              member.team !== teamName && <li key={index}>
                <div className={styles.member_item}>
                  <span className={styles.avatar}>{member.avatar}</span>
                  <span>{member.name}</span>
                  <button
                    onClick={() => {
                      member.team = teamName;

                      setTeam(() => [...team ]);
                      
                      if (team.filter((item) => item.team === teamName).length >= 5) {
                        setIsTeamMemberPopup(!isTeamMemberPopup);
                      }
                      
                    }}
                  >+</button>
                </div>
              </li>
            }
          </React.Fragment>
        ))
      }
      <li>
        <button
          onClick={() => setIsTeamMemberPopup(false)}
          className={styles.button_close}
        >
          Done
        </button>
      </li>
    </ul>
  )
}