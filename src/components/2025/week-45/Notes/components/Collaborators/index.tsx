import React from "react";
import styles from "../../Note.module.css";
import { TypeCollaborators, TypeItem } from "../../types";

export const CollaboratorsList = ({ ...item }: TypeItem) => {
  const { collaborators } = item;

  return (
    <section className={styles.item_collaborators}>
      {
        collaborators?.map((collabs: TypeCollaborators, index: number) => (
          <React.Fragment key={index}>
            {
              index <= 2 ? <span
                key={index}
                className={styles.avatars} style={{ "--bg": collabs.color}}>
                  {collabs.avatar}
              </span> : <span className={styles.more}>+</span>
            }
          </React.Fragment>
        ))
      }
      <span className={styles.item_text}>Collaborate with</span>
      {
        item.collaborators.map((collabs: TypeCollaborators, index: number) => (
          <React.Fragment key={index}>
            {
              index <= 2 ? <span key={index} className={styles.collabs}>
                {collabs.name}{index < item.collaborators.length - 2 && ","}
              </span> : <span>...</span>
            }
          </React.Fragment>
        ))
      }
    </section>
  )
}
