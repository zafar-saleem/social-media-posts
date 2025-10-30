import styles from "./Note.module.css";
import React from "react";
import { Header } from "./components/Header";
import { Filter } from "./components/Filter";
import { ItemListContainer } from "./components/ItemList";

export const Notes = async () => {
  const Data = await import("./data.json", {
    with: {
      type: "json"
    }
  });
  
  return (
    <section className={styles.notes}>
      <Header />
      <Filter />
      <ul className={styles.notes_list}>
        <ItemListContainer notes={Data} />
      </ul>
    </section>
  )
}
