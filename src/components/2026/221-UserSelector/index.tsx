"use client";

import React, { CSSProperties } from "react";
import styles from "./styles.module.css";

export const Users = [
  {
    id: 1,
    name: "Kevin Dukkon",
    color: "aliceblue",
  },
  {
    id: 2,
    name: "Philip Kanter",
    color: "aqua",
  },
  {
    id: 3,
    name: "Charles Hunter",
    color: "bisque",
  },
  {
    id: 4,
    name: "David Giller",
    color: "blanchedalmond",
  },
  {
    id: 5,
    name: "James Doe",
    color: "blueviolet",
  },
  {
    id: 6,
    name: "Abraham Langer",
    color: "brown",
  },
  {
    id: 7,
    name: "Zafar Saleem",
    color: "burlywood",
  },
  {
    id: 8,
    name: "Katie Zinjer",
    color: "cadetblue",
  },
]

export const UserSelector = () => {
  const [users, setUsers] = React.useState(Users);

  const findUser = (event: any) => {
    const user = Users.filter(item => {
      if (item.name.toLowerCase().includes(event.target.value.toLowerCase())) {
        return item;
      }
    });

    setUsers(user);
  }

  return (
    <div className={styles.user_selector}>
      <div className={styles.selector_input}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(114 114 114)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
        <input
          type="search"
          className={styles.form_input}
          onChange={findUser}
        />
      </div>
      <span className={styles.title}>All Users</span>
      <ul className={styles.users_container}>
        {
          users.map((item) => (
            <li key={item.id} className={styles.user_item}>
              <span
                className={styles.avatar}
                style={{ "--bg": item.color } as CSSProperties}>{item.name.charAt(0)}</span>
              <span className={styles.text}>{item.name}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}