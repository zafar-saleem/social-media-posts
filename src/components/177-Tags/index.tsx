"use client";

import React, { Activity } from "react";
import styles from "./styles.module.css";
import { useQueryState } from 'nuqs';

export const Tags = () => {
  const [mode, setMode] = useQueryState("mode", { defaultValue: 'hidden' });
  
  return (
    <section className={styles.container}>
      <button
        className={styles.button_tag}
        onClick={() => setMode(() => mode === "visible" ? "hidden" : "visible")}
      >
        <input type="checkbox" className={styles.tag_input} />
        <div className={styles.tags_list}>
          <span className={styles.tag} />
          <span className={styles.tag} />
          <span className={styles.tag}>+</span>
        </div>
        <span className={styles.button_label}>Create tag</span>
      </button>
      
      <Activity mode={mode}>
        <TagsList />
      </Activity>
    </section>
  )
}

export const TagsList = () => {
  const [tags, setTag] = React.useState([{ name: "", color: ""}]);
  
  console.log(tags);

  return (
    <section className={styles.new_tag}>
      <section className={styles.list_view}>
        <div className={styles.header}>New tag</div>
        <input
          type="text"
          className={styles.tag_name}
          autoFocus
        />
        <div className={styles.tag_color_list}>
          <label className={`${styles.tag_color} ${styles.color_1}`}>
            <input
              type="radio"
              className={styles.color}
              name="color"
              value="rgb(249 114 22)"
            />
          </label>
          <label className={`${styles.tag_color} ${styles.color_2}`}>
            <input type="radio" className={styles.color} name="color" value="rgb(234 162 65)" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_3}`}>
            <input type="radio" className={styles.color} name="color" value="rgb(228 184 68)" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_4}`}>
            <input type="radio" className={styles.color} name="color" value="rgb(150 204 71)" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_5}`}>
            <input type="radio" className={styles.color} name="color" value="rgb(93 193 107)" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_6}`}>
            <input type="radio" className={styles.color} name="color" value="rgb(93 193 107)" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_7}`}>
            <input type="radio" className={styles.color} name="color" value="rgb(88 180 167)" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_8}`}>
            <input type="radio" className={styles.color} name="color" value="rgb(88 180 167)" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_9}`}>
            <input type="radio" className={styles.color} name="color" value="rgb(77 178 208)" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_10}`}>
            <input type="radio" className={styles.color} name="color" value="rgb(72 161 229)" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_11}`}>
            <input type="radio" className={styles.color} name="color" value="rgb(77 127 240)" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_12}`}>
            <input type="radio" className={styles.color} name="color" value="rgb(99 105 231)" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_13}`}>
            <input type="radio" className={styles.color} name="color" value="rgb(158 91 240)" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_14}`}>
            <input type="radio" className={styles.color} name="color" value="rgb(219 87 153)" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_15}`}>
            <input type="radio" className={styles.color} name="color" value="rgb(228 79 98)" />
          </label>
          <label className={`${styles.tag_color} ${styles.color_16}`}>
            <input type="radio" className={styles.color} name="color" value="rgb(115 115 115)" />
          </label>
        </div>
        <button
          className={styles.button_create}
        >Create</button>
      </section>
    </section>
  )
}