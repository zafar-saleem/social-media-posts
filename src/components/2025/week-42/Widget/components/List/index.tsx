import styles from "../../Widget.module.css";
import { People } from "../../data";
import React from "react";
import { Card } from "../Card";
import { ButtonAdd } from "../ButtonAdd";

export const List = () => {
  return (
    <main className={styles.contents}>
      {
        People.map((people, index) => (
          <React.Fragment key={`${people.name}-${people.role}-${index}`}>
            <Card index={index} {...people} />
          </React.Fragment>
        ))
      }
      <ButtonAdd index={People.length - 1} />
    </main>
  )
}