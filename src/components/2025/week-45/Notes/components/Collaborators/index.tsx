import styles from "../../Note.module.css";

export const CollaboratorsList = ({ item }) => {
  return (
    <section className={styles.item_collaborators}>
      {
        item.collaborators.map((collabs, index) => (
          <span
            key={index}
            className={styles.avatars} style={{ "--bg": collabs.color}}>
              {collabs.avatar}
          </span>
        ))
      }
      <span className={styles.item_text}>Collaborate with</span>
      {
        item.collaborators.map((collabs, index) => (
            <span key={index} className={styles.collabs}>
              {collabs.name}{index < item.collaborators.length - 1 && ","}
            </span>
        ))
      }
    </section>
  )
}
