"use client";

import { Contents } from "./components/Contents";
import { Header } from "./components/Header";
import { Popup } from "./components/Popup";
import styles from "./styles.module.css";
import React from "react";
import { TTeam } from "./type";

const initialValue: TTeam[] = [
  {
    id: 1,
    avatar: "M",
    name: "Murphy",
    team: "product"
  },
  {
    id: 2,
    avatar: "K",
    name: "Kat",
    team: "product"
  },
  {
    id: 3,
    avatar: "R",
    name: "Robert",
    team: "product"
  },
  {
    id: 4,
    avatar: "D",
    name: "Darlene",
    team: "engineering"
  },
  {
    id: 5,
    avatar: "S",
    name: "Savannah",
    team: "engineering"
  },
  {
    id: 6,
    avatar: "Z",
    name: "Zafar",
    team: "engineering"
  }
];

export const TeamManagement = () => {
  const [isTeamMemberPopup, setIsTeamMemberPopup] = React.useState(false);
  const [teamName, setTeamName] = React.useState<any>("product");
  const [team, setTeam] = React.useState(initialValue);

  return (
    <section className={styles.container}>
      <Header team={team} teamName={teamName} />

      <Contents
        team={team}
        teamName={teamName}
        setTeamName={setTeamName}
      />
      <button
        className={styles.add_button}
        disabled={team.filter(item => item.team === teamName).length === 5 ? true: false}
        onClick={() => {
          setIsTeamMemberPopup(!isTeamMemberPopup);
        }}
      >Add a new team member</button>
      
      <Popup
        team={team}
        setTeam={setTeam}
        isTeamMemberPopup={isTeamMemberPopup}
        setIsTeamMemberPopup={setIsTeamMemberPopup}
        teamName={teamName}
      />
      
    </section>
  )
}
