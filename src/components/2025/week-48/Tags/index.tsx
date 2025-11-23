import styles from "./styles.module.css";

export const Tags = () => {
  return (
    <section className={styles.container}>
      <label className={styles.button_tag}>
        <input type="checkbox" className={styles.tag_input} />
        <div className={styles.tags_list}>
          <span className={styles.tag} />
          <span className={styles.tag} />
          <span className={styles.tag}>+</span>
        </div>
        <span className={styles.button_label}>Create tag</span>
      </label>
      <section className={styles.new_tag}>
        <div className={styles.header}>New tag</div>
        <input type="text" className={styles.tag_name} autoFocus />
        <div className={styles.tag_color_list}>
          <label className={`${styles.tag_color} ${styles.color_1}`}>
            <input type="radio" className={styles.color} name="color" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_2}`}>
            <input type="radio" className={styles.color} name="color" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_3}`}>
            <input type="radio" className={styles.color} name="color" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_4}`}>
            <input type="radio" className={styles.color} name="color" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_5}`}>
            <input type="radio" className={styles.color} name="color" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_6}`}>
            <input type="radio" className={styles.color} name="color" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_7}`}>
            <input type="radio" className={styles.color} name="color" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_8}`}>
            <input type="radio" className={styles.color} name="color" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_9}`}>
            <input type="radio" className={styles.color} name="color" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_10}`}>
            <input type="radio" className={styles.color} name="color" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_11}`}>
            <input type="radio" className={styles.color} name="color" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_12}`}>
            <input type="radio" className={styles.color} name="color" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_13}`}>
            <input type="radio" className={styles.color} name="color" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_14}`}>
            <input type="radio" className={styles.color} name="color" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_15}`}>
            <input type="radio" className={styles.color} name="color" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_16}`}>
            <input type="radio" className={styles.color} name="color" />
          </label>
        </div>
        <button className={styles.button_create}>Create</button>
      </section>
    </section>
  )
}