import React from "react";
import styles from "./multi-filter.module.css";

export const MultiFilter = () => {
  return (
    <div className={styles.container}>
      <h1>Multi Filter</h1>
      <nav className={styles.navigation}>
        <ul className={styles.navigation_list}>
          <li className={styles.navigation_item}>
            <label className={styles.item_container}>
              <input
                type="checkbox"
                name="filter"
                className={styles.field_mammals}
              />
              <span className={styles.item_label}>Mammals</span>
            </label>
          </li>
          <li className={styles.navigation_item}>
            <label className={styles.item_container}>
              <input
                type="checkbox"
                name="filter"
                className={styles.field_birds}
              />
              <span className={styles.item_label}>Birds</span>
            </label>
          </li>
          <li className={styles.navigation_item}>
            <label className={styles.item_container}>
              <input type="checkbox" className={styles.field_aquatic} />
              <span className={styles.item_label}>Aquatic</span>
            </label>
          </li>
          <li className={styles.navigation_item}>
            <label className={styles.item_container}>
              <input type="checkbox" className={styles.field_reptiles} />
              <span className={styles.item_label}>Reptiles</span>
            </label>
          </li>
        </ul>
      </nav>
      <div className={styles.contents}>
        <div className={`${styles.card} ${styles.mammals}`}>
          <div className={styles.card_media}>🐕</div>
          <span className={styles.card_name}>Dog</span>
        </div>
        <div className={`${styles.card} ${styles.mammals} ${styles.aquatic}`}>
          <div className={styles.card_media}>🐳</div>
          <span className={styles.card_name}>Whale</span>
        </div>
        <div className={`${styles.card} ${styles.mammals}`}>
          <div className={styles.card_media}>🐅</div>
          <span className={styles.card_name}>Tiger</span>
        </div>
        <div className={`${styles.card} ${styles.mammals} ${styles.aquatic}`}>
          <div className={styles.card_media}>🐬</div>
          <span className={styles.card_name}>Dolphin</span>
        </div>
        <div className={`${styles.card} ${styles.birds}`}>
          <div className={styles.card_media}>🦩</div>
          <span className={styles.card_name}>Flamingo</span>
        </div>
        <div className={`${styles.card} ${styles.birds}`}>
          <div className={styles.card_media}>🦅</div>
          <span className={styles.card_name}>Eagle</span>
        </div>
        <div className={`${styles.card} ${styles.birds}`}>
          <div className={styles.card_media}>🦉</div>
          <span className={styles.card_name}>Owl</span>
        </div>
        <div className={`${styles.card} ${styles.birds}`}>
          <div className={styles.card_media}>🦆</div>
          <span className={styles.card_name}>Duck</span>
        </div>
        <div className={`${styles.card} ${styles.aquatic}`}>
          <div className={styles.card_media}>🐠</div>
          <span className={styles.card_name}>Tropical Fish</span>
        </div>
        <div className={`${styles.card} ${styles.reptiles}`}>
          <div className={styles.card_media}>🐍</div>
          <span className={styles.card_name}>Snake</span>
        </div>
        <div className={`${styles.card} ${styles.reptiles}`}>
          <div className={styles.card_media}>🦖</div>
          <span className={styles.card_name}>T-Rex</span>
        </div>
      </div>
    </div>
  )
}
