"use client";

import styles from "./styles.module.css";
import { data } from "./data";
import React from "react";
import Image from "next/image";

export const LiveSearch = () => {
  const [filter, setFilter] = React.useState(data);

  const filterList = (value: string) => {
    const recipe = data.filter(item => {
      if (item.ingredients.join(" ").includes(value)) {
        return item;
      }
    })

    setFilter(() => recipe);
  }

  return (
    <section className={styles.container}>
      <div className={styles.search_container}>
        <span className={styles.search_icon}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(97 74 220)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>
        </span>
        <input
          type="search"
          placeholder="Live Search..."
          className={styles.search_input}
          onChange={(event) => filterList(event.target.value)}
        />
      </div>
      {
        filter.length <= 0 && <div className={styles.empty_state}>
          <div className={styles.empty}>📭</div>
          <h1>No item found</h1>
        </div>
      }
      <div className={styles.list}>
        {
          filter.length > 0 && filter.map(item => (
            <div className={styles.card} key={item.id}>
              <div className={styles.media}>
                <span>{item.image}</span>
                <span>{item.image}</span>
              </div>
              <div className={styles.ingredients}>
                {item.ingredients.map((ing, index) => (<span key={index} className={styles.chip}>{ing}</span>))}
              </div>
              <span className={styles.name}>{item.recipe_name}</span>
            </div>
          ))
        }
      </div>
    </section>
  )
}